import Cell from '@/components/table/Cell';
import { IconButton, Menu, TableRow } from '@mui/material';
import React, { FC, useState } from 'react';
import { getKCWFormat } from '@/util';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { SelectedProductOption } from '../types';
import { SelectedOptionItem } from '@/constants';
import { Edit } from '@mui/icons-material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Product } from '@/api/graphql/codegen/graphql';
import OptionMenu from '@/components/ui/listItem/OptionMenu';

interface Props {
  product: Product;
  onClickOption: (option: SelectedProductOption | null, product: Product | null) => void;
  scrollRef: ((elem: HTMLTableRowElement) => void) | null;
}

const ProductBodyRow: FC<Props> = ({ product, scrollRef, onClickOption }) => {
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);
  const productOptionMenus: Record<SelectedProductOption, SelectedOptionItem> = {
    edit: {
      callback: () => {
        onClickOption('edit', product);
        setMenuAnchor(null);
      },
      label: '편집',
      icon: <Edit />,
    },
    delete: {
      callback: () => {
        onClickOption('delete', product);
        setMenuAnchor(null);
      },
      label: '삭제',
      icon: <DeleteOutlinedIcon />,
    },
  };

  return (
    <TableRow hover ref={scrollRef}>
      <Menu anchorEl={menuAnchor} open={!!menuAnchor} onClose={() => setMenuAnchor(null)}>
        {Object.entries(productOptionMenus).map(([option, menu]) => (
          <OptionMenu key={option} menu={menu} option={option} />
        ))}
      </Menu>
      <Cell sx={{ minWidth: 200 }}>{product.code}</Cell>
      <Cell sx={{ minWidth: 200 }}>{product.category?.name ?? ''}</Cell>
      <Cell sx={{ minWidth: 200 }}>{product.barCode ?? ''}</Cell>
      <Cell sx={{ minWidth: 200 }}>{product.name}</Cell>
      <Cell sx={{ minWidth: 200 }}>{getKCWFormat(product.wonPrice)}</Cell>
      <Cell sx={{ minWidth: 200 }}>{getKCWFormat(product.salePrice)}</Cell>
      <Cell sx={{ minWidth: 200 }}>{product.leadTime ?? ''}</Cell>
      <Cell sx={{ minWidth: 50 }}>
        <IconButton onClick={(event) => setMenuAnchor(event.currentTarget)}>
          <MoreHorizIcon />
        </IconButton>
      </Cell>
    </TableRow>
  );
};

export default ProductBodyRow;
