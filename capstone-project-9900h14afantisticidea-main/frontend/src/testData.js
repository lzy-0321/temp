export const gData = {
  nodes: [
    { id: 'Myriel', group: 1 },
    { id: 'Napoleon', group: 1 },
    { id: 'Mlle.Baptistine', group: 1 },
    { id: 'Mme.Magloire', group: 1 },
  ],
  links: [
    { source: 'Napoleon', target: 'Myriel', value: 50 },
    { source: 'Mlle.Baptistine', target: 'Myriel', value: 8 },
    { source: 'Mme.Magloire', target: 'Myriel', value: 10 },
    { source: 'Mme.Magloire', target: 'Mlle.Baptistine', value: 6 },
  ],
};
