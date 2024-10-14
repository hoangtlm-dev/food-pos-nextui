// Constants
import { ICONS } from '@/constants'

// Types
import { IIconProps } from '@/types'

const DiscountIcon = ({
  color = ICONS.DEFAULT_COLOR,
  width = ICONS.DEFAULT_WIDTH,
  height = ICONS.DEFAULT_HEIGHT
}: IIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9511 0.716446L12.1334 0.886452L12.8522 1.6052C13.0991 1.85092 13.4229 2.00242 13.7674 2.03646L13.9161 2.04378H14.9441C16.5479 2.04378 17.8594 3.29795 17.951 4.87883L17.9561 5.05578V6.08278C17.9561 6.43258 18.0767 6.76886 18.2943 7.03624L18.3934 7.14645L19.1122 7.86525C20.2437 8.99165 20.2943 10.7929 19.2577 11.98L19.1224 12.1251L18.3941 12.8535C18.1491 13.099 17.9975 13.4231 17.9634 13.7672L17.9561 13.9158V14.9448C17.9561 16.5485 16.702 17.8591 15.1211 17.9507L14.9441 17.9558H13.9161C13.5676 17.9558 13.2309 18.0769 12.9633 18.2951L12.8531 18.3945L12.1352 19.1113C11.01 20.2442 9.20745 20.2944 8.01992 19.2574L7.86577 19.1131L7.14866 18.396C6.90027 18.1494 6.57583 17.9973 6.23232 17.9631L6.0841 17.9558H5.0551C3.45197 17.9558 2.14083 16.7023 2.04922 15.1217L2.0441 14.9448V13.9158C2.0441 13.5678 1.92281 13.2308 1.70472 12.9637L1.60541 12.8537L0.888277 12.1356C-0.244298 11.0094 -0.294536 9.20679 0.742484 8.02044L0.877774 7.87545L1.60389 7.14834C1.85084 6.89963 2.00267 6.57581 2.03676 6.23146L2.0441 6.08278V5.05578L2.04922 4.87885C2.13744 3.35668 3.3566 2.13715 4.87824 2.0489L5.0551 2.04378H6.0841C6.43259 2.04378 6.76936 1.9229 7.0364 1.70572L7.14641 1.60682L7.86457 0.887655C8.99094 -0.243823 10.7934 -0.293637 11.9511 0.716446ZM9.04152 1.84256L8.9268 1.94674L8.20555 2.66899C7.6883 3.18258 7.00418 3.48966 6.28193 3.53727L6.0841 3.54378H5.0551C4.26754 3.54378 3.61982 4.14793 3.55028 4.91821L3.5441 5.05578V6.08278C3.5441 6.81195 3.2795 7.5131 2.80221 8.06116L2.6668 8.20674L1.93963 8.93491C1.38782 9.48923 1.35569 10.3649 1.84334 10.9589L1.9478 11.0738L2.66706 11.7941C3.18147 12.3097 3.48976 12.995 3.53756 13.7178L3.5441 13.9158V14.9448C3.5441 15.7328 4.14781 16.3801 4.91762 16.4496L5.0551 16.4558H6.0841C6.81189 16.4558 7.51365 16.7207 8.06183 17.198L8.20743 17.3335L8.93075 18.0568C9.48896 18.6119 10.3649 18.6442 10.9584 18.1565L11.0731 18.0521L11.794 17.3322C12.3107 16.8179 12.9952 16.5101 13.7181 16.4623L13.9161 16.4558H14.9441C15.7328 16.4558 16.3804 15.8524 16.4499 15.0823L16.4561 14.9448V13.9158C16.4561 13.1869 16.7209 12.4839 17.1976 11.9383L17.3328 11.7935L18.0603 11.066C18.6121 10.511 18.644 9.63577 18.1571 9.04195L18.0528 8.92711L17.3309 8.20523C16.817 7.68765 16.5102 7.00422 16.4626 6.28094L16.4561 6.08278V5.05578C16.4561 4.26737 15.852 3.61951 15.0817 3.54996L14.9441 3.54378H13.9161C13.1869 3.54378 12.4849 3.27939 11.938 2.80243L11.7928 2.66711L11.1048 1.97734L11.065 1.94031C10.5107 1.38855 9.63484 1.35624 9.04152 1.84256ZM13.0965 12.0424C13.1665 12.1124 13.2265 12.1924 13.2665 12.2824C13.2965 12.3724 13.3165 12.4724 13.3165 12.5724C13.3165 12.6734 13.2965 12.7624 13.2665 12.8524C13.2265 12.9424 13.1665 13.0324 13.0965 13.1024C12.9565 13.2424 12.7665 13.3224 12.5665 13.3224C12.3665 13.3224 12.1765 13.2424 12.0365 13.1024C11.9665 13.0324 11.9165 12.9424 11.8765 12.8524C11.8365 12.7624 11.8165 12.6734 11.8165 12.5724C11.8165 12.4724 11.8365 12.3724 11.8765 12.2824C11.9165 12.1924 11.9665 12.1124 12.0365 12.0424C12.3165 11.7624 12.8165 11.7624 13.0965 12.0424ZM13.1001 6.89915C13.3664 7.16542 13.3906 7.58208 13.1728 7.87569L13.1001 7.95981L7.96013 13.0998C7.66724 13.3927 7.19237 13.3927 6.89947 13.0998C6.63321 12.8335 6.609 12.4169 6.82686 12.1233L6.89947 12.0392L12.0395 6.89915C12.3324 6.60626 12.8072 6.60626 13.1001 6.89915ZM7.9564 6.90278C8.09641 7.04178 8.1764 7.23278 8.1764 7.43278C8.1764 7.53278 8.1664 7.62178 8.1264 7.71278C8.0864 7.80278 8.0264 7.88278 7.9564 7.96278C7.8864 8.03278 7.8064 8.08178 7.7164 8.12178C7.6264 8.16178 7.5264 8.18278 7.4264 8.18278C7.3264 8.18278 7.2364 8.16178 7.1464 8.12178C7.0564 8.08178 6.9664 8.03278 6.8964 7.96278C6.8264 7.88278 6.7764 7.80278 6.7364 7.71278C6.6964 7.62178 6.6764 7.53278 6.6764 7.43278C6.6764 7.33178 6.6964 7.23278 6.7364 7.14278C6.7764 7.05278 6.8264 6.96278 6.8964 6.90278C7.1864 6.62178 7.6764 6.62178 7.9564 6.90278Z"
        fill={color}
      />
    </svg>
  )
}

export default DiscountIcon
