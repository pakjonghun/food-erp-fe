import { Instance } from './instance';
import { ClientName } from './type';

export const uploadExcelFile = async (serviceName: string, file: File) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    await Instance.post(`/api/upload/${serviceName}`, formData, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const downloadParsedExcelFile = async (clientName: ClientName, file: File) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    const result = await Instance.post(`/api//upload/edit-order/${clientName}`, formData, {
      headers: {
        'content-type': 'multipart/form-data',
      },
      responseType: 'blob',
    });

    const url = window.URL.createObjectURL(new Blob([result.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', '수정된 엑셀파일.xlsx');
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (err) {
    console.error(err);
    return err;
  }
};
