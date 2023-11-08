type LogoIconProps = {
  size?: number;
};

export const LogoIcon = ({ size = 32 }: LogoIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 500 500">
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0.97466}
      d="m91.13 136.94-39.96 35.087-30.215 132.554q-1.95 7.797-9.746 7.797H8.285q-7.798-1.95-7.798-10.721v-1.95l31.19-135.477q.974-2.924 3.898-4.873l40.936-38.012-.975-17.544H64.815q-9.747 0-9.747-9.746-.974-55.556 21.443-79.922Q89.18.487 107.7.487l2.924 10.722.974-10.722q18.519 0 31.19 13.646 24.366 27.29 24.366 79.922 0 4.873-3.899 7.797-2.924 2.924-6.822 2.924l-13.645-.975.974 18.519 31.19 38.011 24.366 40.936 42.885-51.657q2.924-3.898 7.797-3.898 3.899 0 7.31 3.41 3.411 3.412 3.411 7.31 0 3.9-2.924 6.823l-51.657 62.379q-2.924 3.898-7.797 3.898h-.975q-5.848-.974-7.797-5.848l-31.189-51.657-30.214-36.062q-5.848-5.848-5.848-13.645V103.8q0-5.848 2.924-10.721t7.31-7.31q4.386-2.437 10.234-2.437h2.924q-.975-30.214-17.544-54.58-6.823-7.798-16.57-7.798h-.974l-1.95-9.746v9.746h-.974q-9.747 0-16.57 7.797Q75.537 52.144 75.537 80.41v2.924H77.485q7.798 0 13.646 5.848 5.848 5.848 5.848 13.646v19.493q0 8.772-5.848 14.62zM79.436 395.224q7.797.975 14.132 6.823 6.336 5.848 7.31 13.645l13.645 71.15v1.95q0 8.771-7.797 10.72h-1.95q-8.771 0-10.72-8.771l-13.646-72.125q-.974-1.95-1.949-1.95H31.676q-3.898 0-7.31-3.41-3.41-3.412-3.41-7.31 0-.975.974-2.925L62.865 237.33q1.95-7.797 10.722-7.797 3.898 0 6.822 2.924t2.924 6.823v2.924L45.322 395.224Zm86.744-157.895 41.91 165.692v2.924q0 3.9-2.923 7.31-2.924 3.412-6.823 3.412h-47.758l-.975.974-14.62 73.1q-.974 8.772-9.746 8.772h-1.95q-8.772-1.95-8.772-10.722 0-.974.975-1.949l13.645-72.125q.975-7.797 7.31-13.158 6.336-5.36 14.133-6.335h34.113l-38.012-153.021q-.974-.975-.974-2.924 0-3.899 3.41-6.823 3.412-2.924 7.31-2.924 7.798 0 9.747 7.797zm322.612 199.806q4.874 0 7.798 2.923 2.924 2.924 2.924 7.798 0 2.924-1.462 4.873-1.462 1.95-3.899 3.411-2.437 1.462-5.36 1.462h-9.747v10.722q0 3.898-3.411 7.31-3.412 3.41-7.31 3.41-3.899 0-7.31-3.41-3.412-3.412-3.412-7.31v-10.722H291.91v10.722q0 3.898-3.411 7.31-3.411 3.41-7.31 3.41-3.899 0-7.31-3.41-3.411-3.412-3.411-7.31v-10.722h-9.747q-4.873 0-7.797-2.924-2.924-2.924-2.924-7.31 0-4.386 2.924-7.31 2.924-2.923 7.797-2.923h9.747V94.055q0-3.899 3.411-7.31 3.411-3.412 7.31-3.412h187.135q3.898 0 7.31 3.412 3.41 3.411 3.41 7.31v343.08ZM291.911 291.91v62.379h165.691V291.91zm0-187.134v165.692h165.691V104.776Zm0 332.359h165.691v-62.379H291.91Zm37.036-240.741V149.61h15.595V198.343q0 4.873-.975 9.747-.974 4.873-3.898 8.772-2.924 2.924-6.823 4.873-4.873 1.95-9.747 1.95h-.974q-5.848 0-11.696-.975l-7.797-3.9 3.898-14.619q3.899 1.95 7.31 3.411 3.411 1.462 6.335 2.437h.975q3.899 0 5.848-3.899 1.95-3.898 1.95-8.772zm97.466-46.784h15.595l-20.468 73.1h-13.645l-10.722-43.86-11.695 43.86h-12.671l-21.442-73.1h16.569l9.746 44.834 1.95 8.772 1.949-8.772 8.772-42.885h13.645l9.747 42.885.974 8.772 1.95-8.772z"
    />
  </svg>
);