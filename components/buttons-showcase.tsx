import { Button, ButtonProps } from '@/components/ui/button';

const variants = ['default', 'outline', 'secondary'];
const sizes = ['default', 'sm', 'lg'];

// TODO : primary / secondary / icon / external (hover, active, disabled)
const ButtonsShowcase = () => {
    return (
        <div className="space-y-4">
            {variants.map((variant) => (
                <div key={variant} className="space-x-4">
                    {sizes.map((size) => (
                        <Button
                            key={size}
                            variant={variant as ButtonProps['variant']}
                            size={size as ButtonProps['size']}
                        >
                            {variant} {size}
                        </Button>
                    ))}
                </div>
            ))}
        </div>
    );
};
ButtonsShowcase.displayName = 'ButtonsShowcase';

export default ButtonsShowcase;
