export const getBootstrapColorForPrio = prio => {
  switch (prio) {
    case 'LOWEST':
      return '-light';
    case 'LOW':
      return '-success';
    case 'MEDIUM':
      return '-info';
    case 'HIGH':
      return '-danger';
    case 'HIGHEST':
      return '-danger';
    default:
      return '-info';
  }
};

const COLORS = ['#18bc9c', '#3498db', '#FFBB28', '#FF8042'];

export const getColorForStatus = status => {
  switch (status) {
    case 'TODO':
      return COLORS[0];
    case 'DESIGN':
      return COLORS[1];
    case 'PROGRESS':
      return COLORS[2];
    case 'REVIEW':
      return COLORS[1];
    case 'TEST':
      return COLORS[0];
    case 'DONE':
      return COLORS[3];
    default:
      return COLORS[3];
  }
};

export const getColorForType = type => {
  switch (type) {
    case 'STORY':
      return COLORS[1];
    case 'BUG':
      return COLORS[3];
    default:
      return COLORS[0];
  }
};

export const getColorForPrio = prio => {
  switch (prio) {
    case 'LOW':
      return COLORS[0];
    case 'MEDIUM':
      return COLORS[1];
    case 'HIGH':
      return COLORS[3];
    default:
      return COLORS[2];
  }
};
