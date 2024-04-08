import { useMutation } from '@apollo/client';
import { graphql } from '../codegen';
import { UserFragment } from '../fragments/userFragment';

const updateProfileDocument = graphql(`
  mutation UpdateProfile($updateProfileInput: UpdateProfileDTO!) {
    updateProfile(updateProfileInput: $updateProfileInput) {
      id
      role
    }
  }
`);

export const useUpdateProfile = () => {
  return useMutation(updateProfileDocument, {
    update(cache, { data }) {
      cache.modify({
        fields: {
          myInfo() {
            const newMyInfo = cache.writeFragment({
              data: data?.updateProfile,
              fragment: UserFragment,
            });
            return newMyInfo!;
          },
        },
      });
    },
  });
};
