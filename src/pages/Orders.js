import React from 'react';

//components
import OrdersTable from '../components/table/OrdersTable';

//data
import {ordersItems} from '../router'
     
     const Orders = () => {

       return (
        <div>
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card__body">
                        <OrdersTable
                            limit='10'
                            Data={ordersItems}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}
     export default Orders;