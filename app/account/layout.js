"use client";

import { useState } from "react";
import SideNavigation from "@/app/_components/SideNavigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleCloseSidebar = () => setSidebarOpen(false);

  return (
    <div className="min-h-screen bg-primary-950 text-primary-100">

      {/* Mobile Header */}
      <div className="lg:hidden flex justify-between items-center px-4 py-3 border-b border-primary-800 bg-primary-950 pt-10">
        <button onClick={() => setSidebarOpen(true)} aria-label="Open sidebar">
          <Bars3Icon className="h-7 w-7 text-primary-100" />
        </button>
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={handleCloseSidebar}
        >
          <aside
            className="fixed top-0 left-0 h-full w-64 bg-primary-900 shadow-md z-50 p-4 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-4 mt-20">
              <button onClick={handleCloseSidebar} aria-label="Close sidebar">
                <XMarkIcon className="h-6 w-6 text-primary-100" />
              </button>
            </div>
            <SideNavigation onLinkClick={handleCloseSidebar} />
          </aside>
        </div>
      )}

      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-[16rem_1fr] gap-8">
        <aside className="h-screen border-r border-primary-800 p-4 overflow-y-auto bg-primary-900">
          <SideNavigation />
        </aside>
        <main className="p-4">{children}</main>
      </div>

      {/* Mobile Main Content */}
      <div className="lg:hidden p-4">{children}</div>
    </div>
  );
}
