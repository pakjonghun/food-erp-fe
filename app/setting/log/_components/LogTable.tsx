import { FC } from 'react';
import { Table, TableBody, TableHead, TableRow } from '@mui/material';
import { FindLogsDto, Log } from '@/http/graphql/codegen/graphql';
import { useFindLogs } from '@/http/graphql/hooks/log/useFindLogs';
import dayjs from 'dayjs';
import useInfinityScroll from '@/hooks/useInfinityScroll';
import LoadingRow from '@/components/table/LoadingRow';
import EmptyRow from '@/components/table/EmptyRow';
import Cell from '@/components/table/Cell';
import HeadCell from '@/components/table/HeadCell';
import ScrollTableContainer from '@/components/table/ScrollTableContainer';

interface Props {
  findLogsQuery: FindLogsDto;
}

const LogTable: FC<Props> = ({ findLogsQuery }) => {
  const { data, networkStatus, fetchMore } = useFindLogs(findLogsQuery);
  const createRow = (log: Omit<Log, '__typename'>) => {
    const copyData = Object.assign({}, log);
    copyData.createdAt = dayjs(log.createdAt).format('YYYY. MM. DD.');
    return copyData;
  };

  const rows = data?.logs?.data?.map((row) => createRow(row as Log)) ?? [];
  const callback: IntersectionObserverCallback = (entries) => {
    if (entries[0].isIntersecting) {
      const totalCount = data?.logs.totalCount;
      if (totalCount && totalCount > rows.length) {
        fetchMore({
          variables: {
            findLogsQuery: {
              ...findLogsQuery,
              skip: rows.length,
            },
          },
        });
      }
    }
  };

  const scrollRef = useInfinityScroll({ callback });

  const isLoading = networkStatus === 1 || networkStatus === 3;
  const isEmpty = rows.length === 0;

  return (
    <ScrollTableContainer sx={{ mt: 3 }}>
      <Table sx={{ tableLayout: 'auto' }} stickyHeader>
        <TableHead>
          <TableRow>
            <HeadCell text="날짜" />
            <HeadCell text="작성자" />
            <HeadCell tableCellProp={{ width: '60%' }} text="내용" />
            <HeadCell text="로그타입" />
          </TableRow>
        </TableHead>
        <TableBody>
          <EmptyRow colSpan={4} isEmpty={isEmpty} />
          {rows.map((row, index) => {
            const result = parseToJSON(row.description);

            return (
              <TableRow
                hover
                key={row._id}
                ref={index === rows.length - 1 ? scrollRef : null}
              >
                <Cell sx={{ whiteSpace: 'nowrap' }}>{row.createdAt}</Cell>
                <Cell>{row.userId}</Cell>
                <Cell sx={{ whiteSpace: 'nowrap' }}>{result}</Cell>
                <Cell>{row.logType}</Cell>
              </TableRow>
            );
          })}
          <LoadingRow isLoading={isLoading} colSpan={4} />
        </TableBody>
      </Table>
    </ScrollTableContainer>
  );
};

export default LogTable;

function parseToJSON(data: string) {
  try {
    const jsonData = JSON.parse(data);
    let description = '';
    const entries = Object.entries(jsonData);
    entries.forEach(([k, v], index) => {
      const suffix =
        index === entries.length - 1 //
          ? ''
          : ', ';
      let value = v;
      if (k.includes('at')) {
        value = dayjs(new Date(v as string)).format('YYYY-MM-DD');
      }
      description += `${k} : ${value}` + suffix;
    });
    return description;
  } catch (err) {
    const _err = err as { message: string };
    console.log(_err.message);
    return '';
  }
}
