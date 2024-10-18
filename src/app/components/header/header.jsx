"use client"; // Indica que este es un Client Component
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Usar usePathname si está disponible

import "./header.css";

export const Header = () => {
  const pathname = usePathname(); // Obtener la ruta actual (si `usePathname` está disponible)

  const currentPage = (path) => pathname === path ? "current-page" : "";

  return (
    <header className="header">
      <label className="text-wrapper">
        <Link href="/">Topeng</Link>
      </label>
      <ul className="nav-bar">
        <li>
          <Link href="/home" className={currentPage('/home')}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={currentPage('/about')}>
            About Us
          </Link>
        </li>
        <li>
          <Link href="/contact" className={currentPage('/contact')}>
            Contact
          </Link>
        </li>
        <li>
          <Link href="/faq" className={currentPage('/faq')}>
            FAQ
          </Link>
        </li>
      </ul>
      <button className="btn-started">Get Started</button>
    </header>
  );
};
