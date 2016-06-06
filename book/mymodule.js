// 절대값
exports.abs = function(number){
  if( 0 < number ){
    return number;
  } else {
    return -number;
  }
};

// 원의 넓이
exports.circleArea = function (radius){
  return radius * radius * Math.PI;
};
