import React from 'react'
import { Row, Col} from 'antd';
import { Card } from './Blocks/Card';





 

const data = [
    {

        id: 1,
        name: 'шарик',
        image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'

},
{

    id: 2,
    name: 'футболка',
    image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'

},
{

    id: 3,
    name: 'шапка',
    image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'

}
]

export const ProductList = () => {

    const renderCards = (element) => (
        <Col span={4}>
<Card el={element} />
  </Col>
    )
    return (   
      <Row justify="space-around">
          { data.map(el => renderCards(el)) }
          </Row>
     
   
    
    )
}






