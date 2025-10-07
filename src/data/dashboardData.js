// Datos simulados para el dashboard

export const metricsCards = [
  {
    id: 1,
    title: 'Total Revenue',
    value: '$45,231',
    change: '+20.1%',
    trend: 'up',
    icon: 'dollar',
  },
  {
    id: 2,
    title: 'Active Users',
    value: '2,845',
    change: '+15.3%',
    trend: 'up',
    icon: 'users',
  },
  {
    id: 3,
    title: 'Conversion Rate',
    value: '3.24%',
    change: '+2.5%',
    trend: 'up',
    icon: 'trending',
  },
  {
    id: 4,
    title: 'Avg. Order Value',
    value: '$124.50',
    change: '-4.3%',
    trend: 'down',
    icon: 'package',
  },
];

// Datos para gráfica de líneas (Ventas mensuales)
export const monthlySalesData = [
  { month: 'Jan', sales: 4000, revenue: 2400, users: 2400 },
  { month: 'Feb', sales: 3000, revenue: 1398, users: 2210 },
  { month: 'Mar', sales: 2000, revenue: 9800, users: 2290 },
  { month: 'Apr', sales: 2780, revenue: 3908, users: 2000 },
  { month: 'May', sales: 1890, revenue: 4800, users: 2181 },
  { month: 'Jun', sales: 2390, revenue: 3800, users: 2500 },
  { month: 'Jul', sales: 3490, revenue: 4300, users: 2100 },
  { month: 'Aug', sales: 4200, revenue: 5200, users: 2800 },
  { month: 'Sep', sales: 3800, revenue: 4900, users: 2600 },
  { month: 'Oct', sales: 4100, revenue: 5100, users: 2900 },
  { month: 'Nov', sales: 4600, revenue: 5800, users: 3100 },
  { month: 'Dec', sales: 5200, revenue: 6400, users: 3400 },
];

// Datos para gráfica de barras (Usuarios activos por semana)
export const weeklyUsersData = [
  { day: 'Mon', active: 1200, inactive: 800, new: 240 },
  { day: 'Tue', active: 1800, inactive: 600, new: 320 },
  { day: 'Wed', active: 2200, inactive: 700, new: 410 },
  { day: 'Thu', active: 2600, inactive: 500, new: 380 },
  { day: 'Fri', active: 3000, inactive: 450, new: 450 },
  { day: 'Sat', active: 2400, inactive: 900, new: 290 },
  { day: 'Sun', active: 1800, inactive: 1100, new: 220 },
];

// Datos para tabla de transacciones recientes
export const recentTransactions = [
  {
    id: 'TXN-001',
    customer: 'John Doe',
    email: 'john@example.com',
    amount: '$324.50',
    status: 'completed',
    date: '2024-03-15',
  },
  {
    id: 'TXN-002',
    customer: 'Jane Smith',
    email: 'jane@example.com',
    amount: '$189.99',
    status: 'completed',
    date: '2024-03-15',
  },
  {
    id: 'TXN-003',
    customer: 'Mike Johnson',
    email: 'mike@example.com',
    amount: '$542.00',
    status: 'pending',
    date: '2024-03-14',
  },
  {
    id: 'TXN-004',
    customer: 'Sarah Williams',
    email: 'sarah@example.com',
    amount: '$89.50',
    status: 'completed',
    date: '2024-03-14',
  },
  {
    id: 'TXN-005',
    customer: 'Robert Brown',
    email: 'robert@example.com',
    amount: '$1,234.00',
    status: 'failed',
    date: '2024-03-13',
  },
  {
    id: 'TXN-006',
    customer: 'Emily Davis',
    email: 'emily@example.com',
    amount: '$456.75',
    status: 'completed',
    date: '2024-03-13',
  },
];

// Datos para gráfica de dona (Distribución de categorías)
export const categoryDistribution = [
  { name: 'Electronics', value: 4500, percentage: 35 },
  { name: 'Clothing', value: 3200, percentage: 25 },
  { name: 'Food', value: 2400, percentage: 18 },
  { name: 'Books', value: 1600, percentage: 12 },
  { name: 'Others', value: 1300, percentage: 10 },
];

// Datos de tráfico por fuente
export const trafficSources = [
  { source: 'Organic Search', visitors: 12543, percentage: 42 },
  { source: 'Direct', visitors: 8234, percentage: 28 },
  { source: 'Social Media', visitors: 5621, percentage: 19 },
  { source: 'Referral', visitors: 2341, percentage: 8 },
  { source: 'Email', visitors: 891, percentage: 3 },
];

// === ANALYTICS DATA ===

// Métricas de Analytics
export const analyticsMetrics = [
  {
    id: 1,
    title: 'Bounce Rate',
    value: '42.3%',
    change: '-5.2%',
    trend: 'up',
    icon: 'trending',
  },
  {
    id: 2,
    title: 'Avg. Session Duration',
    value: '3m 24s',
    change: '+12.4%',
    trend: 'up',
    icon: 'timer',
  },
  {
    id: 3,
    title: 'Pages per Session',
    value: '4.8',
    change: '+8.1%',
    trend: 'up',
    icon: 'file',
  },
  {
    id: 4,
    title: 'Goal Completions',
    value: '1,234',
    change: '+18.7%',
    trend: 'up',
    icon: 'target',
  },
];

// Tráfico por fuente en el tiempo (para gráfica de área)
export const trafficOverTime = [
  { month: 'Jan', organic: 8500, direct: 6200, social: 3800, referral: 1500, email: 600 },
  { month: 'Feb', organic: 9200, direct: 6800, social: 4200, referral: 1800, email: 700 },
  { month: 'Mar', organic: 10100, direct: 7200, social: 4800, referral: 2000, email: 750 },
  { month: 'Apr', organic: 10800, direct: 7500, social: 5100, referral: 2100, email: 800 },
  { month: 'May', organic: 11500, direct: 7800, social: 5400, referral: 2200, email: 850 },
  { month: 'Jun', organic: 12543, direct: 8234, social: 5621, referral: 2341, email: 891 },
];

// Top páginas más visitadas
export const topPages = [
  { page: '/dashboard', views: 45234, uniqueVisitors: 32145, avgTime: '4:32', bounceRate: '32%' },
  { page: '/products', views: 38921, uniqueVisitors: 28456, avgTime: '3:45', bounceRate: '38%' },
  { page: '/analytics', views: 32456, uniqueVisitors: 24123, avgTime: '5:12', bounceRate: '28%' },
  { page: '/settings', views: 28734, uniqueVisitors: 21098, avgTime: '2:56', bounceRate: '45%' },
  { page: '/users', views: 24567, uniqueVisitors: 18234, avgTime: '3:22', bounceRate: '35%' },
  { page: '/reports', views: 21345, uniqueVisitors: 16543, avgTime: '4:18', bounceRate: '30%' },
];

// Dispositivos y navegadores
export const deviceStats = [
  { device: 'Desktop', users: 18543, percentage: 62, sessions: 34234, bounceRate: '38%' },
  { device: 'Mobile', users: 9234, percentage: 31, sessions: 18234, bounceRate: '45%' },
  { device: 'Tablet', users: 2123, percentage: 7, sessions: 4123, bounceRate: '42%' },
];

export const browserStats = [
  { browser: 'Chrome', users: 15234, percentage: 51 },
  { browser: 'Safari', users: 8234, percentage: 28 },
  { browser: 'Firefox', users: 3456, percentage: 12 },
  { browser: 'Edge', users: 2123, percentage: 7 },
  { browser: 'Others', users: 853, percentage: 2 },
];

// Actividad por hora del día
export const hourlyActivity = [
  { hour: '00:00', visitors: 245 },
  { hour: '02:00', visitors: 189 },
  { hour: '04:00', visitors: 156 },
  { hour: '06:00', visitors: 312 },
  { hour: '08:00', visitors: 845 },
  { hour: '10:00', visitors: 1234 },
  { hour: '12:00', visitors: 1567 },
  { hour: '14:00', visitors: 1423 },
  { hour: '16:00', visitors: 1678 },
  { hour: '18:00', visitors: 1345 },
  { hour: '20:00', visitors: 1123 },
  { hour: '22:00', visitors: 678 },
];

// === USERS DATA ===

// Métricas de usuarios
export const usersMetrics = [
  {
    id: 1,
    title: 'Total Users',
    value: '29,845',
    change: '+12.5%',
    trend: 'up',
    icon: 'users',
  },
  {
    id: 2,
    title: 'New Users',
    value: '2,543',
    change: '+8.2%',
    trend: 'up',
    icon: 'userPlus',
  },
  {
    id: 3,
    title: 'Active Users (24h)',
    value: '8,234',
    change: '+5.7%',
    trend: 'up',
    icon: 'userCheck',
  },
  {
    id: 4,
    title: 'Retention Rate',
    value: '78.3%',
    change: '+3.1%',
    trend: 'up',
    icon: 'trending',
  },
];

// Crecimiento de usuarios en el tiempo
export const userGrowthData = [
  { month: 'Jan', total: 18500, new: 1200, returning: 17300 },
  { month: 'Feb', total: 20100, new: 1600, returning: 18500 },
  { month: 'Mar', total: 22300, new: 2200, returning: 20100 },
  { month: 'Apr', total: 24800, new: 2500, returning: 22300 },
  { month: 'May', total: 27200, new: 2400, returning: 24800 },
  { month: 'Jun', total: 29845, new: 2645, returning: 27200 },
];

// Usuarios por país
export const usersByCountry = [
  { country: 'United States', users: 8234, percentage: 28 },
  { country: 'United Kingdom', users: 5621, percentage: 19 },
  { country: 'Canada', users: 4123, percentage: 14 },
  { country: 'Germany', users: 3456, percentage: 12 },
  { country: 'France', users: 2987, percentage: 10 },
  { country: 'Australia', users: 2341, percentage: 8 },
  { country: 'Spain', users: 1567, percentage: 5 },
  { country: 'Italy', users: 1234, percentage: 4 },
];

// Distribución por roles
export const usersByRole = [
  { name: 'User', value: 22345, percentage: 75 },
  { name: 'Premium', value: 4478, percentage: 15 },
  { name: 'Admin', value: 1492, percentage: 5 },
  { name: 'Guest', value: 1530, percentage: 5 },
];

// Tabla de usuarios
export const usersTableData = [
  {
    id: 1,
    name: 'John Anderson',
    email: 'john.anderson@example.com',
    role: 'admin',
    status: 'active',
    joinDate: '2023-01-15',
    lastActive: '2 hours ago',
    avatar: 'JA',
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    email: 'sarah.mitchell@example.com',
    role: 'premium',
    status: 'active',
    joinDate: '2023-02-20',
    lastActive: '1 day ago',
    avatar: 'SM',
  },
  {
    id: 3,
    name: 'Michael Chen',
    email: 'michael.chen@example.com',
    role: 'user',
    status: 'active',
    joinDate: '2023-03-10',
    lastActive: '5 minutes ago',
    avatar: 'MC',
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@example.com',
    role: 'premium',
    status: 'active',
    joinDate: '2023-04-05',
    lastActive: '3 hours ago',
    avatar: 'ER',
  },
  {
    id: 5,
    name: 'David Thompson',
    email: 'david.thompson@example.com',
    role: 'user',
    status: 'inactive',
    joinDate: '2023-05-12',
    lastActive: '2 weeks ago',
    avatar: 'DT',
  },
  {
    id: 6,
    name: 'Lisa Wang',
    email: 'lisa.wang@example.com',
    role: 'admin',
    status: 'active',
    joinDate: '2023-01-08',
    lastActive: '30 minutes ago',
    avatar: 'LW',
  },
  {
    id: 7,
    name: 'James Wilson',
    email: 'james.wilson@example.com',
    role: 'user',
    status: 'active',
    joinDate: '2023-06-22',
    lastActive: '1 hour ago',
    avatar: 'JW',
  },
  {
    id: 8,
    name: 'Maria Garcia',
    email: 'maria.garcia@example.com',
    role: 'premium',
    status: 'active',
    joinDate: '2023-07-15',
    lastActive: '4 hours ago',
    avatar: 'MG',
  },
  {
    id: 9,
    name: 'Robert Taylor',
    email: 'robert.taylor@example.com',
    role: 'user',
    status: 'inactive',
    joinDate: '2023-08-30',
    lastActive: '1 month ago',
    avatar: 'RT',
  },
  {
    id: 10,
    name: 'Jennifer Lee',
    email: 'jennifer.lee@example.com',
    role: 'guest',
    status: 'active',
    joinDate: '2024-01-10',
    lastActive: '10 minutes ago',
    avatar: 'JL',
  },
  {
    id: 11,
    name: 'Christopher Brown',
    email: 'chris.brown@example.com',
    role: 'premium',
    status: 'active',
    joinDate: '2023-09-05',
    lastActive: '6 hours ago',
    avatar: 'CB',
  },
  {
    id: 12,
    name: 'Amanda Davis',
    email: 'amanda.davis@example.com',
    role: 'user',
    status: 'active',
    joinDate: '2023-10-18',
    lastActive: '2 days ago',
    avatar: 'AD',
  },
];

// === REPORTS DATA ===

// Métricas de reportes
export const reportsMetrics = [
  {
    id: 1,
    title: 'Total Reports',
    value: '2,456',
    change: '+18.2%',
    trend: 'up',
    icon: 'fileText',
  },
  {
    id: 2,
    title: 'Scheduled Reports',
    value: '34',
    change: '+5.0%',
    trend: 'up',
    icon: 'clock',
  },
  {
    id: 3,
    title: 'Downloads',
    value: '8,921',
    change: '+24.6%',
    trend: 'up',
    icon: 'download',
  },
  {
    id: 4,
    title: 'Data Coverage',
    value: '98.5%',
    change: '+1.2%',
    trend: 'up',
    icon: 'database',
  },
];

// Reportes generados en el tiempo
export const reportsOverTime = [
  { month: 'Jan', generated: 320, downloaded: 285 },
  { month: 'Feb', generated: 380, downloaded: 340 },
  { month: 'Mar', generated: 420, downloaded: 395 },
  { month: 'Apr', generated: 390, downloaded: 360 },
  { month: 'May', generated: 450, downloaded: 425 },
  { month: 'Jun', generated: 496, downloaded: 470 },
];

// Reportes por categoría
export const reportsByCategory = [
  { category: 'Sales', count: 856, percentage: 35 },
  { category: 'Analytics', count: 614, percentage: 25 },
  { category: 'Users', count: 491, percentage: 20 },
  { category: 'Finance', count: 368, percentage: 15 },
  { category: 'Inventory', count: 127, percentage: 5 },
];

// Reportes recientes
export const recentReports = [
  {
    id: 1,
    name: 'Q2 Sales Performance',
    type: 'Sales',
    generatedDate: '2024-06-28',
    status: 'ready',
    size: '2.4 MB',
    format: 'PDF',
  },
  {
    id: 2,
    name: 'User Acquisition Report',
    type: 'Users',
    generatedDate: '2024-06-27',
    status: 'ready',
    size: '1.8 MB',
    format: 'XLSX',
  },
  {
    id: 3,
    name: 'Monthly Analytics Summary',
    type: 'Analytics',
    generatedDate: '2024-06-26',
    status: 'processing',
    size: '-',
    format: 'PDF',
  },
  {
    id: 4,
    name: 'Inventory Stock Report',
    type: 'Inventory',
    generatedDate: '2024-06-25',
    status: 'ready',
    size: '956 KB',
    format: 'CSV',
  },
  {
    id: 5,
    name: 'Financial Overview Q2',
    type: 'Finance',
    generatedDate: '2024-06-24',
    status: 'scheduled',
    size: '-',
    format: 'PDF',
  },
  {
    id: 6,
    name: 'Customer Behavior Analysis',
    type: 'Analytics',
    generatedDate: '2024-06-23',
    status: 'ready',
    size: '3.1 MB',
    format: 'PDF',
  },
];

// === PRODUCTS DATA ===

// Métricas de productos
export const productsMetrics = [
  {
    id: 1,
    title: 'Total Products',
    value: '1,245',
    change: '+8.3%',
    trend: 'up',
    icon: 'box',
  },
  {
    id: 2,
    title: 'In Stock',
    value: '1,089',
    change: '+5.2%',
    trend: 'up',
    icon: 'package',
  },
  {
    id: 3,
    title: 'Low Stock',
    value: '87',
    change: '+12.0%',
    trend: 'down',
    icon: 'alertTriangle',
  },
  {
    id: 4,
    title: 'Categories',
    value: '24',
    change: '+2.0%',
    trend: 'up',
    icon: 'grid',
  },
];

// Top productos más vendidos
export const topProducts = [
  { product: 'Wireless Headphones', sales: 1234, revenue: 98720 },
  { product: 'Smart Watch Pro', sales: 1089, revenue: 326700 },
  { product: 'Laptop Stand', sales: 967, revenue: 48350 },
  { product: 'USB-C Hub', sales: 845, revenue: 42250 },
  { product: 'Mechanical Keyboard', sales: 723, revenue: 108450 },
  { product: 'Webcam HD', sales: 689, revenue: 55120 },
  { product: 'Monitor 27"', sales: 645, revenue: 193500 },
  { product: 'Desk Mat XL', sales: 578, revenue: 17340 },
];

// Inventario en el tiempo
export const inventoryOverTime = [
  { month: 'Jan', total: 1156, inStock: 1020, lowStock: 136 },
  { month: 'Feb', total: 1178, inStock: 1045, lowStock: 133 },
  { month: 'Mar', total: 1195, inStock: 1068, lowStock: 127 },
  { month: 'Apr', total: 1210, inStock: 1075, lowStock: 135 },
  { month: 'May', total: 1228, inStock: 1082, lowStock: 146 },
  { month: 'Jun', total: 1245, inStock: 1089, lowStock: 156 },
];

// Productos por categoría
export const productsByCategory = [
  { name: 'Electronics', value: 425, percentage: 34 },
  { name: 'Accessories', value: 324, percentage: 26 },
  { name: 'Computers', value: 249, percentage: 20 },
  { name: 'Audio', value: 174, percentage: 14 },
  { name: 'Others', value: 73, percentage: 6 },
];

// Tabla de productos
export const productsTableData = [
  {
    id: 1,
    name: 'Wireless Headphones Pro',
    sku: 'WHP-2024-001',
    category: 'Audio',
    price: '$79.99',
    stock: 145,
    status: 'in-stock',
    sales: 1234,
  },
  {
    id: 2,
    name: 'Smart Watch Series 5',
    sku: 'SWS-2024-002',
    category: 'Electronics',
    price: '$299.99',
    stock: 67,
    status: 'in-stock',
    sales: 1089,
  },
  {
    id: 3,
    name: 'Ergonomic Laptop Stand',
    sku: 'ELS-2024-003',
    category: 'Accessories',
    price: '$49.99',
    stock: 223,
    status: 'in-stock',
    sales: 967,
  },
  {
    id: 4,
    name: 'USB-C Multi-Port Hub',
    sku: 'UCH-2024-004',
    category: 'Accessories',
    price: '$39.99',
    stock: 8,
    status: 'low-stock',
    sales: 845,
  },
  {
    id: 5,
    name: 'Mechanical Gaming Keyboard',
    sku: 'MGK-2024-005',
    category: 'Computers',
    price: '$149.99',
    stock: 0,
    status: 'out-of-stock',
    sales: 723,
  },
  {
    id: 6,
    name: '1080p HD Webcam',
    sku: 'HDW-2024-006',
    category: 'Electronics',
    price: '$79.99',
    stock: 156,
    status: 'in-stock',
    sales: 689,
  },
  {
    id: 7,
    name: '27" 4K Monitor',
    sku: '4KM-2024-007',
    category: 'Computers',
    price: '$299.99',
    stock: 34,
    status: 'in-stock',
    sales: 645,
  },
  {
    id: 8,
    name: 'Extended Desk Mat',
    sku: 'EDM-2024-008',
    category: 'Accessories',
    price: '$29.99',
    stock: 12,
    status: 'low-stock',
    sales: 578,
  },
  {
    id: 9,
    name: 'Bluetooth Speaker Mini',
    sku: 'BSM-2024-009',
    category: 'Audio',
    price: '$59.99',
    stock: 189,
    status: 'in-stock',
    sales: 534,
  },
  {
    id: 10,
    name: 'Wireless Mouse Pro',
    sku: 'WMP-2024-010',
    category: 'Computers',
    price: '$49.99',
    stock: 267,
    status: 'in-stock',
    sales: 512,
  },
];

// === SETTINGS DATA ===

// User profile settings
export const userProfile = {
  name: 'John Anderson',
  email: 'john.anderson@example.com',
  role: 'Admin',
  avatar: 'JA',
  bio: 'Product Manager passionate about data-driven decisions and building amazing user experiences.',
};

// Notification settings
export const notificationSettings = {
  email: {
    marketing: true,
    productUpdates: true,
    weeklyReports: false,
    securityAlerts: true,
  },
  push: {
    desktop: true,
    sound: false,
    badge: true,
  },
};

// Privacy settings
export const privacySettings = {
  profileVisibility: 'public',
  showOnlineStatus: true,
  dataSharing: false,
};

// Security settings
export const securitySettings = {
  twoFactorAuth: false,
  loginAlerts: true,
  sessionTimeout: '30min',
};
