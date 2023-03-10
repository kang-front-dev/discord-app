import React, { ReactElement } from 'react';
interface IContentContainer {
  type: 'center' | 'right' | 'left';
  children?: ReactElement;
}

export default function ContentContainer({
  type,
  children,
}: IContentContainer) {
  return <div className={`content__${type}-container`}>{children}</div>;
}
