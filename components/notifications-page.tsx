"use client"

import { ChevronLeft, DollarSign, CreditCard, Truck, AlertCircle } from "lucide-react"
import type { Notification } from "@/lib/store-data"

interface NotificationsPageProps {
  notifications: Notification[]
  onMarkAllRead: () => void
}

export function NotificationsPage({ notifications, onMarkAllRead }: NotificationsPageProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Fixed Header */}
      <div className="bg-card px-4 pt-5 pb-4 shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="text-card-foreground" aria-label="Go back">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h1 className="text-2xl font-bold text-card-foreground">Notifications</h1>
          </div>
          <button
            id="markAllReadButton"
            onClick={onMarkAllRead}
            className="text-sm font-medium text-primary transition-colors duration-200 hover:text-primary/80"
          >
            Mark all as read
          </button>
        </div>
      </div>

      {/* Scrollable Notifications List */}
      <div id="notificationsList" className="flex-1 overflow-y-auto px-4 pb-2 scrollbar-hide">
        <div className="flex flex-col gap-3">
          {notifications.map((notification) => (
            <NotificationCard key={notification.id} notification={notification} />
          ))}
        </div>
      </div>
    </div>
  )
}

function NotificationCard({ notification }: { notification: Notification }) {
  const iconConfig: Record<string, { bg: string; icon: React.ReactNode }> = {
    order: {
      bg: "bg-[#22c55e]/15",
      icon: <DollarSign className="w-5 h-5 text-[#22c55e]" />,
    },
    payment: {
      bg: "bg-primary/15",
      icon: <CreditCard className="w-5 h-5 text-primary" />,
    },
    driver: {
      bg: "bg-[#f97316]/15",
      icon: <Truck className="w-5 h-5 text-[#f97316]" />,
    },
    system: {
      bg: "bg-[#8b5cf6]/15",
      icon: <AlertCircle className="w-5 h-5 text-[#8b5cf6]" />,
    },
  }

  const config = iconConfig[notification.type] || iconConfig.system

  return (
    <div className="bg-card border border-border rounded-xl p-4 flex items-start gap-3 shadow-sm transition-all duration-200 active:scale-[0.98]">
      {/* Unread dot */}
      <div className="flex items-center pt-1 shrink-0">
        {!notification.read && (
          <span className="w-2 h-2 rounded-full bg-[#f97316]" />
        )}
        {notification.read && <span className="w-2 h-2" />}
      </div>

      {/* Icon */}
      <div className={`${config.bg} w-10 h-10 rounded-full flex items-center justify-center shrink-0`}>
        {config.icon}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-bold text-card-foreground">{notification.title}</h3>
        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{notification.message}</p>
        <p className="text-[10px] text-muted-foreground/70 mt-1.5">{notification.timestamp}</p>
      </div>
    </div>
  )
}
