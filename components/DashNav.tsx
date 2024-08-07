import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Home, ChevronRight, LineChart, Menu, MoveHorizontal, Package, Package2, Settings, ShoppingCart, Users } from "lucide-react"

export default function Component() {
  return (
    <div className="grid min-h-screen w-full grid-cols-[auto_1fr]">
      <div className="flex flex-col bg-background">
        <div className="flex h-14 items-center justify-between border-b px-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <Package2 className="h-6 w-6" />
            <span className="font-semibold">Acme Inc</span>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle sidebar</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Menu className="mr-2 h-4 w-4" />
                Default View
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Menu className="mr-2 h-4 w-4" />
                Minimal View
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex-1 overflow-auto">
          <nav className="grid gap-1 p-4">
            <Link
              href="#"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              <Home className="h-5 w-5" />
              Dashboard
            </Link>
            <Collapsible className="grid gap-1">
              <CollapsibleTrigger className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground [&[data-state=open]>svg]:rotate-90">
                <Package className="h-5 w-5" />
                Products
                <ChevronRight className="ml-auto h-4 w-4 transition-transform" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-6">
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  prefetch={false}
                >
                  All Products
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  prefetch={false}
                >
                  New Products
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  prefetch={false}
                >
                  Archived Products
                </Link>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible className="grid gap-1">
              <CollapsibleTrigger className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground [&[data-state=open]>svg]:rotate-90">
                <Users className="h-5 w-5" />
                Customers
                <ChevronRight className="ml-auto h-4 w-4 transition-transform" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-6">
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  prefetch={false}
                >
                  All Customers
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  prefetch={false}
                >
                  New Customers
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  prefetch={false}
                >
                  Inactive Customers
                </Link>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible className="grid gap-1">
              <CollapsibleTrigger className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground [&[data-state=open]>svg]:rotate-90">
                <ShoppingCart className="h-5 w-5" />
                Orders
                <ChevronRight className="ml-auto h-4 w-4 transition-transform" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-6">
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  prefetch={false}
                >
                  All Orders
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  prefetch={false}
                >
                  Pending Orders
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  prefetch={false}
                >
                  Fulfilled Orders
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  prefetch={false}
                >
                  Cancelled Orders
                </Link>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible className="grid gap-1">
              <CollapsibleTrigger className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground [&[data-state=open]>svg]:rotate-90">
                <LineChart className="h-5 w-5" />
                Analytics
                <ChevronRight className="ml-auto h-4 w-4 transition-transform" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-6">
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  prefetch={false}
                >
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  prefetch={false}
                >
                  Reports
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  prefetch={false}
                >
                  Insights
                </Link>
              </CollapsibleContent>
            </Collapsible>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              <Settings className="h-5 w-5" />
              Settings
            </Link>
          </nav>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 shadow-sm">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#" prefetch={false}>
                    Dashboard
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Products</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="ml-auto flex items-center gap-4">
            <Input
              type="search"
              placeholder="Search..."
              className="w-full max-w-[200px] rounded-md bg-muted px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <img
                    src="/placeholder.svg"
                    width={32}
                    height={32}
                    alt="Avatar"
                    className="rounded-full"
                    style={{ aspectRatio: "32/32", objectFit: "cover" }}
                  />
                  <span className="sr-only">User menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex-1 p-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Products</CardTitle>
                <CardDescription>View and manage your latest product additions.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Acme Laser Lemonade Machine</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Draft</Badge>
                      </TableCell>
                      <TableCell>$499.99</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoveHorizontal className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Publish</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Hypernova Headphones</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Active</Badge>
                      </TableCell>
                      <TableCell>$129.99</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoveHorizontal className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Deactivate</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">AeroGlow Desk Lamp</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Active</Badge>
                      </TableCell>
                      <TableCell>$39.99</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoveHorizontal className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Deactivate</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter>
                <div className="text-sm text-muted-foreground">Showing 3 of 12 products</div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>View and manage your latest customer orders.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">#3210</TableCell>
                      <TableCell>Olivia Martin</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Shipped</Badge>
                      </TableCell>
                      <TableCell>$42.25</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoveHorizontal className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}