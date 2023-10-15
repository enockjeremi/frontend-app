import { Spinner } from "@nextui-org/spinner";
import React, { ReactNode } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  children: ReactNode;
  items: number;
  next: () => ReactNode | any;
  more: boolean;
}
const InfiniteComponent = ({ items, next, more, children }: Props) => {
  return (
    <InfiniteScroll
      dataLength={items}
      next={next}
      hasMore={more}
      loader={
        <div className="w-full py-4 flex place-content-center">
          <Spinner label="Loading..." color="success" />
        </div>
      }
      endMessage={
        <div className="w-full py-8 flex place-content-center">
          {items === 0
            ? "No se han encontrado resultados."
            : "No hay mas elementos para mostrar."}
        </div>
      }
    >
      {children}
    </InfiniteScroll>
  );
};

export default InfiniteComponent;
