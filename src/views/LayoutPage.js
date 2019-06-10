import React from 'react';
import MasonryLayout from '../components/Layout/Layout';
import _ from 'lodash';


function LayoutPage(){
	let boxWidth = 100;
	let gap = 5
	let cols = Math.floor(window.innerWidth/(boxWidth+gap))
    return (
		<div style={{ height: window.innerHeight }}>
          <MasonryLayout columns={cols} gap={gap}>
            {
	            _.range(0, 30).map(key => {
	              const height = 100 + Math.ceil(Math.random() * 200);
	              return (
	                <div key={key} style={{height: `${height}px`, width: `${boxWidth}px`, backgroundColor: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`}} />
	              )
	            })
            }
          </MasonryLayout>
		</div>
    )
}

export default LayoutPage;