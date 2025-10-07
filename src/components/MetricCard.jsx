import { TrendingUp, TrendingDown, DollarSign, Users, Package, Timer, FileText, Target } from 'lucide-react';
import { Card, CardContent } from './ui/Card';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';

const iconMap = {
  dollar: DollarSign,
  users: Users,
  trending: TrendingUp,
  package: Package,
  timer: Timer,
  file: FileText,
  target: Target,
};

export function MetricCard({ title, value, change, trend, icon, index }) {
  const Icon = iconMap[icon] || DollarSign;
  const TrendIcon = trend === 'up' ? TrendingUp : TrendingDown;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-muted-foreground mb-1">
                {title}
              </p>
              <h3 className="text-3xl font-bold mb-2">{value}</h3>
              <div className="flex items-center gap-1">
                <TrendIcon
                  className={cn(
                    'w-4 h-4',
                    trend === 'up' ? 'text-green-500' : 'text-red-500'
                  )}
                />
                <span
                  className={cn(
                    'text-sm font-medium',
                    trend === 'up' ? 'text-green-500' : 'text-red-500'
                  )}
                >
                  {change}
                </span>
                <span className="text-sm text-muted-foreground ml-1">
                  vs last month
                </span>
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Icon className="w-6 h-6 text-primary" />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
