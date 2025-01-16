"use client";

import Link from 'next/link';
import { Trophy, Users, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Trophy className="h-6 w-6" />
            <span className="text-xl font-bold">Liga Catzuqui</span>
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Equipos</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <Link href="/equipos" className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>Ver Equipos</span>
                    </Link>
                    <Link href="/equipos/registro" className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>Registrar Equipo</span>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/calendario" legacyBehavior passHref>
                  <NavigationMenuLink className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Calendario</span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-4">
            <Button variant="outline">Iniciar Sesión</Button>
            <Button>Registrarse</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}