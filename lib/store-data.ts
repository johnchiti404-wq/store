// Placeholder data bindings for Firebase/Firestore connection
// All values here are placeholders that will be replaced with live data

export interface Order {
  id: string
  customerName: string
  time: string
  price: number
  status: "pending" | "accepted" | "completed"
  image: string
}

export interface Notification {
  id: string
  type: "order" | "payment" | "driver" | "system"
  title: string
  message: string
  timestamp: string
  read: boolean
}

export interface Product {
  id: string
  name: string
  price: number
  stock: number
  category: string
  unit: string
  description: string
  image: string
  available: boolean
}

export interface OpeningHour {
  day: string
  isOpen: boolean
  openTime: string
  closeTime: string
}

export interface StoreInfo {
  logo: string
  name: string
  address: string
  phone: string
}

export interface StoreData {
  storeName: string
  storeStatus: boolean
  storeStatusManualOverride: boolean
  revenueToday: number
  ordersToday: number
  completedOrders: number
  pendingOrders: number
  weeklyRevenue: number
  customerRating: number
  totalReviews: number
  recentOrders: Order[]
  notifications: Notification[]
  products: Product[]
  openingHours: OpeningHour[]
  storeInfo: StoreInfo
}

// Placeholder data - will be replaced by Firebase/Firestore bindings
export const placeholderStoreData: StoreData = {
  storeName: "{storeName}",
  storeStatus: true, // {storeStatus}
  storeStatusManualOverride: false, // {storeStatusManualOverride}
  revenueToday: 1250.80, // {revenueToday}
  ordersToday: 68, // {ordersToday}
  completedOrders: 52, // {completedOrders}
  pendingOrders: 16, // {pendingOrders}
  weeklyRevenue: 9450.22, // {weeklyRevenue}
  customerRating: 4.8, // {customerRating}
  totalReviews: 214, // {totalReviews}
  recentOrders: [
    // {orderList} - placeholder binding for Firebase
    {
      id: "#102345",
      customerName: "John D.",
      time: "14:15",
      price: 120.50,
      status: "pending",
      image: "/images/food-1.jpg",
    },
    {
      id: "#102346",
      customerName: "Emily W.",
      time: "13:58",
      price: 89.00,
      status: "accepted",
      image: "/images/food-2.jpg",
    },
    {
      id: "#102347",
      customerName: "Michael K.",
      time: "12:10",
      price: 240.75,
      status: "completed",
      image: "/images/food-3.jpg",
    },
    {
      id: "#102348",
      customerName: "Sarah L.",
      time: "13:50",
      price: 190.25,
      status: "completed",
      image: "/images/food-4.jpg",
    },
    {
      id: "#102349",
      customerName: "David R.",
      time: "11:30",
      price: 75.00,
      status: "completed",
      image: "/images/food-5.jpg",
    },
    {
      id: "#102350",
      customerName: "Anna B.",
      time: "10:45",
      price: 155.30,
      status: "completed",
      image: "/images/food-1.jpg",
    },
    {
      id: "#102351",
      customerName: "Chris M.",
      time: "10:20",
      price: 320.00,
      status: "completed",
      image: "/images/food-2.jpg",
    },
    {
      id: "#102352",
      customerName: "Lisa P.",
      time: "09:55",
      price: 45.50,
      status: "completed",
      image: "/images/food-3.jpg",
    },
  ],
  notifications: [
    // {notifications} - placeholder binding for Firebase
    {
      id: "n1",
      type: "order",
      title: "New Order Received!",
      message: "Order #45821 for Sarah J. (Total: ZMW 68.50) is pending fulfillment.",
      timestamp: "2 min ago",
      read: false,
    },
    {
      id: "n2",
      type: "payment",
      title: "Payment Captured",
      message: "Payment for Order #45815 (Mike L.) of ZMW 42.00 was successfully processed.",
      timestamp: "14 min ago",
      read: false,
    },
    {
      id: "n3",
      type: "driver",
      title: "Driver Assigned",
      message: "Driver Alex R. has accepted Order #45812 for delivery.",
      timestamp: "35 min ago",
      read: false,
    },
    {
      id: "n4",
      type: "system",
      title: "System Message",
      message: "App Update: Version 3.4.1 is available now. Bug fixes & improvements.",
      timestamp: "52 min ago",
      read: true,
    },
  ],
  products: [
    // {products} - placeholder binding for Firebase
    {
      id: "p1",
      name: "Gourmet Burger",
      price: 8.99,
      stock: 25,
      category: "Fast Food",
      unit: "item",
      description: "Delicious gourmet burger with premium ingredients",
      image: "/images/food-1.jpg",
      available: true,
    },
    {
      id: "p2",
      name: "Fresh Salad",
      price: 6.50,
      stock: 40,
      category: "Healthy",
      unit: "item",
      description: "Fresh garden salad with seasonal vegetables",
      image: "/images/food-2.jpg",
      available: true,
    },
    {
      id: "p3",
      name: "Chocolate Cake",
      price: 4.50,
      stock: 18,
      category: "Desserts",
      unit: "item",
      description: "Rich chocolate cake with creamy frosting",
      image: "/images/food-3.jpg",
      available: true,
    },
    {
      id: "p4",
      name: "Sushi Platter",
      price: 12.99,
      stock: 12,
      category: "Japanese",
      unit: "item",
      description: "Assorted sushi platter with fresh fish",
      image: "/images/food-4.jpg",
      available: true,
    },
    {
      id: "p5",
      name: "Organic Juice",
      price: 3.00,
      stock: 30,
      category: "Beverages",
      unit: "item",
      description: "Freshly squeezed organic juice",
      image: "/images/food-5.jpg",
      available: true,
    },
  ],
  openingHours: [
    // {openingHours} - placeholder binding for Firebase
    { day: "Monday", isOpen: true, openTime: "09:00", closeTime: "21:00" },
    { day: "Tuesday", isOpen: true, openTime: "10:00", closeTime: "22:00" },
    { day: "Wednesday", isOpen: true, openTime: "09:00", closeTime: "20:00" },
    { day: "Thursday", isOpen: false, openTime: "09:00", closeTime: "21:00" },
    { day: "Friday", isOpen: true, openTime: "11:00", closeTime: "23:00" },
    { day: "Saturday", isOpen: true, openTime: "12:00", closeTime: "23:30" },
    { day: "Sunday", isOpen: false, openTime: "10:00", closeTime: "18:00" },
  ],
  storeInfo: {
    // {storeInfo} - placeholder binding for Firebase
    logo: "",
    name: "My Electronics Shop",
    address: "1234 Main Street, Suite 100, New York, NY 10001",
    phone: "+1 (212) 555-1234",
  },
}
