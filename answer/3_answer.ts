// 第3問：イベント通知メッセージの生成 (Type Guard)
// 【要件】
// システムのイベント通知データを受け取り、その種類に応じて適切なメッセージ（文字列）を生成する関数を作成してください。
// OrderEvent の場合: "Order [id] has been placed by [customerName]."
// DeliveryEvent の場合: "Delivery [id] is now [status]."
// TypeScriptの Discriminated Unions (判別可能な共用体) を使用して、型安全な実装を行うこと。

interface OrderEvent {
  type: "order";
  id: string;
  customerName: string;
}

interface DeliveryEvent {
  type: "delivery";
  id: string;
  status: "shipped" | "delivered";
}

type AppEvent = OrderEvent | DeliveryEvent;

const events: AppEvent[] = [
  { type: "order", id: "ORD-001", customerName: "Park" },
  { type: "delivery", id: "DEL-999", status: "shipped" }
];

function eventLog(appEvent: AppEvent): string {
    switch (appEvent.type) {
        case "order":
            return `Order ${appEvent.id} has been placed by ${appEvent.customerName}.`;
        case "delivery":
            return `Delivery ${appEvent.id} is now ${appEvent.status}.`;
        default:
            const _exhaustiveCheck: never = appEvent;
            return _exhaustiveCheck;
    }
}

for (let event of events) {
    console.log(eventLog(event));
}