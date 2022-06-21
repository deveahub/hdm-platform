import { ReactNode } from 'react';
import { RecoilRoot, RecoilState, UnwrapRecoilValue } from 'recoil';

type RecoilProviderWithStateProps<T extends unknown[]> = {
  children: ReactNode;
  states: {
    [K in keyof T]: [T[K], UnwrapRecoilValue<T[K]>];
  };
};

function RecoilProviderWithState<T extends unknown[]>({
  states,
  children,
}: RecoilProviderWithStateProps<T>) {
  return (
    <RecoilRoot
      initializeState={({ set }) => {
        states.forEach(([atom, values]) => {
          set(atom as RecoilState<unknown>, values);
        });
      }}
    >
      {children}
    </RecoilRoot>
  );
}

export default RecoilProviderWithState;
