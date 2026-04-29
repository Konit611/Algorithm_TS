// 第1問：在庫管理システムのフィルタリングと価格計算
// 【要件】
// ECサイトの在庫リストを受け取り、以下の条件を満たす商品の「合計在庫価格」を算出してください。
//
// status が "instock" (在庫あり) の商品のみ計算対象に含めること。
//
// category が "electronics" の商品については、表示価格から 10% 割引 した価格で計算すること。
//
// 計算結果（合計金額）は、小数点を切り捨てた 整数 で返却すること。

type Product = {
    id: string;
    name: string;
    price: number;
    stock: number;
    status: "instock" | "outofstock";
    category: string;
}

const products: Product[] = [
  { id: "1", name: "Laptop", price: 100000, stock: 5, status: "instock", category: "electronics" },
  { id: "2", name: "Keyboard", price: 5000, stock: 0, status: "outofstock", category: "electronics" },
  { id: "3", name: "Mouse", price: 3000, stock: 10, status: "instock", category: "electronics" },
  { id: "4", name: "T-shirt", price: 2000, stock: 20, status: "instock", category: "fashion" },
];

const filterAndCalcualteTotalPrice = (inventories: Product[]): number => {
    const total = inventories.reduce((acc, item) => {
        if (item.status !== "instock") return acc;

        const discountRate = item.category === "electronics" ? 0.9 : 1;
        const discountedPrice = item.price * discountRate;
        
        return acc + (discountedPrice * item.stock);
    },0);

    return Math.floor(total);
}

console.log(filterAndCalcualteTotalPrice(products));