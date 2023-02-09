import { nanoid } from 'nanoid'

function id() {
  return nanoid()
}

const initProds = [
	{id: id(), name: 'product1', cost: 100, isEdit: false},
	{id: id(), name: 'product2', cost: 200, isEdit: false},
	{id: id(), name: 'product3', cost: 300, isEdit: false},
];



export {
  id, initProds
}
