import { Instance } from './instance';

export const uploadExcelFile = async (serviceName: string, file: File) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    await Instance.post(`/upload/${serviceName}`, formData, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });
  } catch (err) {
    console.error(err);
    return err;
  }
};
