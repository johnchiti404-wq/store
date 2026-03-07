"use client"

import { useState, useRef } from "react"
import { ChevronLeft, Upload, MapPin, Phone } from "lucide-react"
import type { StoreInfo } from "@/lib/store-data"

interface StoreInfoPageProps {
  storeInfo: StoreInfo
  onBack: () => void
  onSave: (info: StoreInfo) => void
}

export function StoreInfoPage({ storeInfo, onBack, onSave }: StoreInfoPageProps) {
  const [logo, setLogo] = useState(storeInfo.logo || "")
  const [name, setName] = useState(storeInfo.name || "")
  const [address, setAddress] = useState(storeInfo.address || "")
  const [phone, setPhone] = useState(storeInfo.phone || "")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setLogo(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSave = () => {
    onSave({
      logo,
      name: name.trim(),
      address: address.trim(),
      phone: phone.trim(),
    })
  }

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Fixed Header */}
      <div className="bg-card px-4 pt-5 pb-4 shrink-0 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="text-card-foreground transition-colors hover:text-primary"
              aria-label="Go back"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold text-card-foreground">Store Information</h1>
          </div>
        </div>
      </div>

      {/* Scrollable Form Content */}
      <div className="flex-1 overflow-y-auto px-4 py-6 scrollbar-hide">
        <div className="flex flex-col gap-6">
          {/* Logo Upload */}
          <div className="flex flex-col items-center gap-3">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-36 h-36 border-2 border-dashed border-border rounded-full flex flex-col items-center justify-center gap-2 bg-card hover:bg-accent/50 transition-colors overflow-hidden"
            >
              {logo ? (
                <img
                  src={logo}
                  alt="Store logo"
                  className="w-full h-full object-cover"
                />
              ) : (
                <>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Upload className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground">Upload Logo</span>
                </>
              )}
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              className="hidden"
            />
          </div>

          {/* Store Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Store Name
            </label>
            <input
              type="text"
              placeholder="Enter store name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-card border border-border rounded-xl text-sm text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          {/* Address */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Address
            </label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Enter store address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-card border border-border rounded-xl text-sm text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="tel"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-card border border-border rounded-xl text-sm text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="w-full bg-primary text-primary-foreground rounded-xl py-4 font-semibold transition-all duration-200 active:scale-[0.98] hover:bg-primary/90 mt-4"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}
