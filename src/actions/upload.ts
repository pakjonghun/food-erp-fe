import axios from 'axios';
import { Instance } from './instance';

export const uploadExcelFile = (serviceName: string, file: File) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    Instance.post(`/upload/${serviceName}`, formData, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });
  } catch (err) {
    console.error(err);
    return err;
  }
};
