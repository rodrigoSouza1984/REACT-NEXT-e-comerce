"use client";

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

interface InfiniteScrollComponentProps {
  fetchMoreData: () => void;
}

const Sentinel = styled.div`
  width: 100%;
  height: 20px;
`;

const InfiniteScrollComponent: React.FC<InfiniteScrollComponentProps> = ({ fetchMoreData }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 1.0,
  });

  useEffect(() => {
    if (inView) {
      fetchMoreData();
    }
  }, [inView, fetchMoreData]);

  return <Sentinel ref={ref} />;
};

export default InfiniteScrollComponent;
