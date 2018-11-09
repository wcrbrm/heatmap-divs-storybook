import React from 'react';
import PropTypes from 'prop-types';

const HeatMapDivs = ({ hosts, size }) => {
  const styleDiv = { width: size, height: size, position: 'relative', textAlign: 'center' };
  const sq = Math.sqrt(hosts.length);
  const intSq = parseInt(sq, 10);
  const numPerRow = sq != intSq ? intSq + 1 : intSq;
  const itemSize = size / numPerRow;
  return (
    <div style={styleDiv}>
      {hosts.map((h, index) => { 
        const key = `k_${index}`;
        const y = parseInt(index / numPerRow, 10);
        const x = index % numPerRow;
        const left = x * itemSize;
        const top = y * itemSize;
        const style = { position: 'absolute', width: itemSize, height: itemSize, left, top, background: h.color };
        return (<div key={key} style={style} title={`${h.host}: ${h.load}`}></div>);
      })}
    </div>
  );
};

HeatMapDivs.propTypes = {
   hosts: PropTypes.any.isRequired,
   size: PropTypes.number.isRequired
};

export default HeatMapDivs;