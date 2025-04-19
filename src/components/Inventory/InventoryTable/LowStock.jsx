export default function LowStock() {
    const columns = ["Stock ID", "Name", "Description", "Quantity", "Unit Cost", "Total Cost"];
    const lowStock = [
        {
            id: 1,
            name: "Low Stock",
            description: "1 Kilograms",
            quantity: 20,
            unitCost: 300.00,
            totalCost: 2300.00
        },
        {
            id: 1,
            name: "Low Stock",
            description: "1 Kilograms",
            quantity: 20,
            unitCost: 300.00,
            totalCost: 2300.00
        },
        {
            id: 1,
            name: "Low Stock",
            description: "1 Kilograms",
            quantity: 20,
            unitCost: 300.00,
            totalCost: 2300.00
        },
        {
            id: 1,
            name: "Low Stock",
            description: "1 Kilograms",
            quantity: 20,
            unitCost: 300.00,
            totalCost: 2300.00
        },
        {
            id: 1,
            name: "Low Stock",
            description: "1 Kilograms",
            quantity: 20,
            unitCost: 300.00,
            totalCost: 2300.00
        },
    ];


    function quantityStatus(qty) {
        if (qty === 0) {
            return <td className="text-danger fw-bold">{ qty }</td>;
        } else if (qty < 10) {
            return <td className="text-warning fw-bold">{ qty }</td>;
        } else {
            return <td>{ qty }</td>;
        }
    }

    return (
        <div>
            <h6 className="fw-bold ms-1 mt-2">Low of Stock</h6>
            <div className="table-responsive">
                <table border={ 1 } className="w-100 py-5">
                    <thead className="sticky-top">
                        <tr>
                            {
                                columns.map((column, index) => (
                                    <th className="text-center py-1 px-4" key={ index }>{ column }</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                    {
                        lowStock.map((stock, index) => (
                            <tr className="text-center" key={ index }>
                                <td>{ stock.id }</td>
                                <td>{ stock.name }</td>
                                <td>{ stock.description }</td>
                                { quantityStatus(stock.quantity) }
                                <td>{ stock.unitCost }</td>
                                <td>{ stock.totalCost }</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}