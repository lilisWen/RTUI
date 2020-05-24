const UniqueIdMap = {};

function uniqueId(prefix = "$rt$") {
  if (!UniqueIdMap[prefix]) {
    UniqueIdMap[prefix] = 0;
  }
  UniqueIdMap[prefix]++;
  return prefix + `${UniqueIdMap[prefix]}`;
}

export default uniqueId;
