import { FC, useState } from 'react';
import { FixedSizeList } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';

import { PostItem } from '@/entities/post';
import { useGetPostListQuery } from '@/shared';

export const PostList: FC = () => {
    const [page, setPage] = useState(1);
    const { data, isLoading, isFetching, isError } = useGetPostListQuery(page);
    let itemCount = (data?.length || 0) + 1;
    // хардкод так как нельзя получить данную информацию с бекенда
    itemCount = itemCount >= 100 ? 100 : itemCount;

    const loadMoreHandler = (startIndex: number, stopIndex: number) => {
        if (!isError && !isLoading && !isFetching) {
            setPage((p) => p + 1);
        }
    };

    const isItemLoaded = (index: number) => index < (data?.length || -1);

    return (
        <div className='p-8 h-full'>
            <div className='p-8 shadow-lg'>
                <InfiniteLoader isItemLoaded={isItemLoaded} loadMoreItems={loadMoreHandler} itemCount={itemCount}>
                    {({ onItemsRendered, ref }) => (
                        <FixedSizeList
                            className='div'
                            height={500}
                            itemCount={itemCount}
                            itemSize={80}
                            onItemsRendered={onItemsRendered}
                            ref={ref}
                            width={'100%'}
                        >
                            {({ index, style }) => <PostItem loading={!isItemLoaded(index)} style={style} {...(data || [])[index]} />}
                        </FixedSizeList>
                    )}
                </InfiniteLoader>
            </div>
        </div>
    );
};
