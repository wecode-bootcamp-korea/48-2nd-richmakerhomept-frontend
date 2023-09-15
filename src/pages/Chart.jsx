import { ResponsiveBar } from '@nivo/bar';
import React from 'react';

const Chart = () => {
  const handle = {
    barClick: data => {
      console.log(data);
    },

    legendClick: data => {
      console.log(data);
    },
  };

  return (
    // chart height이 100%이기 때문이 chart를 덮는 마크업 요소에 height 설정
    <div style={{ width: '800px', height: '500px', margin: '0 auto' }}>
      <ResponsiveBar
        /**
         * chart에 사용될 데이터
         */
        data={[
          { id: '365ml', cola: 1200 },
          { id: '500ml', cola: 2200 },
          { id: '1000ml', cola: 3200 },
        ]}
        /**
         * chart에 보여질 데이터 key (측정되는 값)
         */
        keys={['cola', 'cidar', 'fanta']}
        /**
         * keys들을 그룹화하는 index key (분류하는 값)
         */
        indexBy="id"
        /**
         * chart margin
         */
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        /**
         * chart padding (bar간 간격)
         */
        padding={0.3}
        /**
         * chart 색상
         */
        // colors={{ scheme: 'nivo' }} // nivo에서 제공해주는 색상 조합 사용할 때
        /**
         * color 적용 방식
         */
        colorBy="id" // 색상을 keys 요소들에 각각 적용
        // colorBy="indexValue" // indexBy로 묵인 인덱스별로 각각 적용
        // theme={{
        //   /**
        //    * label style (bar에 표현되는 글씨)
        //    */
        //   labels: {
        //     text: {
        //       fontSize: 14,
        //       fill: '#000000',
        //     },
        //   },
        //   /**
        //    * legend style (default로 우측 하단에 있는 색상별 key 표시)
        //    */
        //   legends: {
        //     text: {
        //       fontSize: 12,
        //       fill: '#000000',
        //     },
        //   },
        //   axis: {
        //     /**
        //      * axis legend style (bottom, left에 있는 글씨)
        //      */
        //     legend: {
        //       text: {
        //         fontSize: 20,
        //         fill: '#000000',
        //       },
        //     },
        //     /**
        //      * axis ticks style (bottom, left에 있는 값)
        //      */
        //     ticks: {
        //       text: {
        //         fontSize: 16,
        //         fill: '#000000',
        //       },
        //     },
        //   },
        // }}
        /**
         * axis bottom 설정
         */
        axisBottom={{
          enable: false,
        }}
        /**
         * axis left 설정
         */
        axisLeft={null}
        enableGridX={false} // x 축 그리드 라인도 없앨 수 있습니다.
        enableGridY={false}
        /**
         * label 안보이게 할 기준 width
         */
        labelSkipWidth={36}
        /**
         * label 안보이게 할 기준 height
         */
        labelSkipHeight={12}
        /**
         * bar 클릭 이벤트
         */
        onClick={handle.barClick}
        /**
         * legend 설정 (default로 우측 하단에 있는 색상별 key 표시)
         */
      />
    </div>
  );
};

export default Chart;
