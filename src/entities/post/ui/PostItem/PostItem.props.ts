import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { IPost, MergeType } from '@/shared';

export interface IPostItem
    extends MergeType<
        Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'id'>,
        IPost & { loading?: boolean; ViewButton: FC<{ id: number }> }
    > {}
