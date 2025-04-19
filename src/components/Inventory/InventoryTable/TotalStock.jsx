export default function TotalStock(props) {
    const columns = ["SKU", "Name", "Description", "Category", "Quantity", "Minimum Stock", "Re-orderStock", "Supplier", "Unit Cost", "Selling Price", "Total Cost"];

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
            <h6 className="fw-bold ms-1 mt-2">All Stock</h6>
            <div className="table-responsive stick-top">
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
                        props.inventoryData.map((stock, index) => (
                            <tr className="text-center" key={ index }>
                                <td>{ stock.sku }</td>
                                <td>{ stock.name }</td>
                                <td>{ stock.description }</td>
                                <td>{ stock.category }</td>
                                { quantityStatus(stock.quantity) }
                                <td>{ stock.minimumStock }</td>
                                <td>{ stock.reorderLevel }</td>
                                <td>{ stock.supplier }</td>
                                <td>{ stock.unitPrice }</td>
                                <td>{ stock.sellingPrice }</td>
                                <td>{ stock.totalValue }</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}