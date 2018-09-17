// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(d){
    return d.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(drivers, revenue){
  return drivers.filter(function(d){
    return d.revenue > revenue;
  }).map (function(dn){
    return dn.name;
  })
}

function exactMatch(drivers, obj){
  return drivers.filter(function(d){
    let matches= false;
    for (const key in obj) {
    matches= d[key] === obj[key];
   }
   return matches
 });
}

function exactMatchToList(drivers, obj){
  return exactMatch(drivers, obj).map(function(d){
    return d.name;
  })
}
