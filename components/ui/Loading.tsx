import { FC } from "react";

interface ILoading {
  loading: boolean;
}

const Loading: FC<ILoading> = ({ loading }) => {
  return (
    <>
      {loading && (
        <>
          &nbsp;&nbsp;
          <svg
            className="animate-spin inline-block border border-white rounded-full h-4 w-4 ml-3 ..."
            viewBox="0 0 24 24"
          ></svg>
        </>
      )}
    </>
  );
};

export default Loading;
