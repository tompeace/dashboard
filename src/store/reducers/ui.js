import { produce } from 'immer'

export default produce((draft = {}, { type, ...payload }) => {
  switch (type) {
    case 'MODAL_OPEN':
      draft.modals = true
      break
    case 'MODAL_CLOSE':
      draft.modals = false
      break
    default:
      break
  }

  return draft
})