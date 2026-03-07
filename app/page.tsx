"use client"

import { useState, useCallback } from "react"
import { DashboardPage } from "@/components/dashboard-page"
import { OrdersPage } from "@/components/orders-page"
import { NotificationsPage } from "@/components/notifications-page"
import { SettingsPage } from "@/components/settings-page"
import { BottomNavigation } from "@/components/bottom-navigation"
import { placeholderStoreData } from "@/lib/store-data"
import type { StoreData } from "@/lib/store-data"

export default function MerchantApp() {
  const [activePage, setActivePage] = useState("dashboard")
  const [storeData, setStoreData] = useState<StoreData>(placeholderStoreData)
  const [direction, setDirection] = useState<"left" | "right">("right")

  const pageOrder = ["dashboard", "orders", "notifications", "settings"]

  const handleNavigate = useCallback(
    (page: string) => {
      const currentIdx = pageOrder.indexOf(activePage)
      const nextIdx = pageOrder.indexOf(page)
      setDirection(nextIdx >= currentIdx ? "right" : "left")
      setActivePage(page)
    },
    [activePage]
  )

  const handleToggleStatus = useCallback(() => {
    setStoreData((prev) => ({ ...prev, storeStatus: !prev.storeStatus }))
  }, [])

  const handleMarkAllRead = useCallback(() => {
    setStoreData((prev) => ({
      ...prev,
      notifications: prev.notifications.map((n) => ({ ...n, read: true })),
    }))
  }, [])

  const handleLogout = useCallback(() => {
    // {logoutAction} - placeholder for Firebase Auth signOut
  }, [])

  const unreadCount = storeData.notifications.filter((n) => !n.read).length

  return (
    <div className="flex flex-col h-dvh w-full max-w-[1200px] mx-auto bg-background">
      {/* Page Content */}
      <div className="flex-1 overflow-hidden relative">
        <div
          key={activePage}
          className="absolute inset-0 animate-in fade-in duration-200"
          style={{
            animationName: direction === "right" ? "slideInFromRight" : "slideInFromLeft",
            animationDuration: "250ms",
            animationTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          {activePage === "dashboard" && (
            <DashboardPage
              data={storeData}
              onToggleStatus={handleToggleStatus}
              onNavigate={handleNavigate}
            />
          )}
          {activePage === "orders" && <OrdersPage orders={storeData.recentOrders} />}
          {activePage === "notifications" && (
            <NotificationsPage
              notifications={storeData.notifications}
              onMarkAllRead={handleMarkAllRead}
            />
          )}
          {activePage === "settings" && <SettingsPage onLogout={handleLogout} />}
        </div>
      </div>

      {/* Fixed Bottom Navigation */}
      <BottomNavigation
        activePage={activePage}
        onNavigate={handleNavigate}
        notificationCount={unreadCount}
      />

      {/* Page transition keyframes */}
      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            transform: translateX(30px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideInFromLeft {
          from {
            transform: translateX(-30px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
