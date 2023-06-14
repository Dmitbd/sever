import { observer } from 'mobx-react-lite'
import RequestStore from '../../../store/RequestStore'
import { useState } from 'react'

const RequestsContainer = observer(() => {

  const [isHidden, setHidden] = useState<boolean>(false)

  return (
    <div style={{ width: '300px' }}>
      <button
        onClick={setHidden.bind(this, isHidden ? false : true)}
      >
        скрыть/показать запросы
      </button>

      {
        !isHidden &&
        <div style={{ height: '300px', overflow: 'scroll' }}>
          {
            RequestStore.requests.map((request) => {
              return (
                <div key={Math.random()}>
                  <p>Дата: {request.date}</p>
                  <p>url:  {request.url}</p>
                </div>
              )
            })
          }
        </div>
      }
    </div>
  )
})

export default RequestsContainer
