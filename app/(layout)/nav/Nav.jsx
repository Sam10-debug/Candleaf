import Link from "next/link"

const Nav = () => {
  return (
   <header className=' md:h-[75px] flex bg-white md:px-32 md:space-x-48 shadow-md'>
        <div className=' flex items-center md:flex-0'>
            <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_903_78)">
            <mask id="mask0_903_78"  maskUnits="userSpaceOnUse" x="0" y="0" width="35" height="34">
            <circle cx="17.2926" cy="16.9761" r="16.8067" fill="#F578A5"/>
            </mask>
            <g mask="url(#mask0_903_78)">
            <circle cx="17.2926" cy="16.9761" r="16.8067" fill="#56B280"/>
            <path d="M9.56204 33.5395V33.9072H9.92969H25.5185H25.8862V33.5395V26.9985C25.8862 26.3977 25.41 25.905 24.8095 25.8845L10.7146 25.404C10.0845 25.3825 9.56204 25.8875 9.56204 26.518V33.5395Z" fill="white" stroke="white" strokeWidth="0.735294"/>
            <g clip-path="url(#clip1_903_78)">
            <path d="M12.8 11.9708C16.2251 7.20856 14.7518 3.33223 14.7559 3.32763C14.6833 3.13351 14.7818 2.91731 14.976 2.84469C15.0739 2.80806 15.1826 2.81396 15.276 2.86093C21.4577 5.81893 24.1178 9.63743 24.6273 13.0898C24.8298 14.4311 24.7032 15.8015 24.2584 17.0831C23.8508 18.2656 23.1719 19.3362 22.2761 20.2091C20.553 21.8732 18.1449 22.6403 15.7682 21.8626C15.1602 21.6643 14.5865 21.3733 14.0674 20.9999C13.026 20.2524 12.236 19.2064 11.802 18.0002C11.3416 16.7101 11.3269 15.3029 11.7605 14.0035C11.9999 13.2763 12.3506 12.5906 12.8 11.9708Z" fill="white"/>
            <path d="M14.8312 3.45089C14.6807 3.30848 14.674 3.07096 14.8164 2.92043C14.9588 2.76989 15.1964 2.76324 15.3469 2.90565C15.358 2.91613 15.3684 2.92727 15.3781 2.93902C15.3919 2.95144 18.3765 6.07991 18.8028 12.1266L18.8073 12.1833C18.8993 13.5965 18.8539 15.0154 18.6716 16.4198L20.7124 14.8559C20.8834 14.7387 21.1169 14.7822 21.2341 14.9531C21.3402 15.1079 21.3157 15.3172 21.1768 15.4432L18.5097 17.481C17.9126 20.9913 15.8077 25.9574 18.5942 29.0656C18.7284 29.2235 18.7091 29.4604 18.5512 29.5946C18.4009 29.7223 18.1773 29.7118 18.0396 29.5706C14.6982 25.8462 17.1296 21.2324 17.795 17.2425L17.8037 17.1865C18.0743 15.5988 18.167 13.9858 18.0802 12.3776L15.6814 10.62C15.5103 10.503 15.4664 10.2695 15.5833 10.0984C15.7003 9.92729 15.9338 9.88341 16.1049 10.0004C16.112 10.0052 16.1189 10.0103 16.1256 10.0156L17.9843 11.384C17.4045 6.14249 14.8421 3.46346 14.8312 3.45089Z" fill="#56B280"/>
            </g>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_903_78">
            <rect width="33.6134" height="33.6134" fill="white" transform="translate(0.48584 0.169434)"/>
            </clipPath>
            <clipPath id="clip1_903_78">
            <rect width="20.6274" height="20.6274" fill="white" transform="translate(2.46729 16.6353) rotate(-48)"/>
            </clipPath>
            </defs>
            </svg>
            <svg width="86" height="15" viewBox="0 0 86 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.432617 8.14895C0.432617 6.87248 0.71401 5.73233 1.2768 4.72851C1.85182 3.71229 2.62871 2.92534 3.60746 2.36766C4.59846 1.79758 5.70568 1.51254 6.92912 1.51254C8.36056 1.51254 9.61459 1.88433 10.6912 2.62791C11.7679 3.37148 12.5203 4.4001 12.9485 5.71375H9.99386C9.70023 5.0941 9.28426 4.62936 8.74594 4.31954C8.21986 4.00972 7.60814 3.85481 6.91077 3.85481C6.16447 3.85481 5.49769 4.0345 4.91044 4.3939C4.33541 4.7409 3.88274 5.23662 3.55241 5.88105C3.23431 6.52548 3.07526 7.28145 3.07526 8.14895C3.07526 9.00407 3.23431 9.76003 3.55241 10.4169C3.88274 11.0613 4.33541 11.5632 4.91044 11.9226C5.49769 12.2696 6.16447 12.4431 6.91077 12.4431C7.60814 12.4431 8.21986 12.2882 8.74594 11.9784C9.28426 11.6562 9.70023 11.1852 9.99386 10.5656H12.9485C12.5203 11.8916 11.7679 12.9264 10.6912 13.67C9.62683 14.4012 8.37279 14.7668 6.92912 14.7668C5.70568 14.7668 4.59846 14.4879 3.60746 13.9303C2.62871 13.3602 1.85182 12.5732 1.2768 11.5694C0.71401 10.5656 0.432617 9.42543 0.432617 8.14895Z" fill="#56B280"/>
            <path d="M14.4823 9.4688C14.4823 8.4278 14.6842 7.50452 15.0879 6.69898C15.5039 5.89344 16.0605 5.2738 16.7579 4.84004C17.4675 4.40629 18.2566 4.18942 19.1253 4.18942C19.8838 4.18942 20.5445 4.34433 21.1073 4.65415C21.6823 4.96397 22.1411 5.35435 22.4836 5.82528V4.35672H25.0712V14.6552H22.4836V13.1495C22.1533 13.6328 21.6945 14.0356 21.1073 14.3578C20.5322 14.6676 19.8655 14.8225 19.1069 14.8225C18.2505 14.8225 17.4675 14.5995 16.7579 14.1533C16.0605 13.7072 15.5039 13.0813 15.0879 12.2758C14.6842 11.4579 14.4823 10.5222 14.4823 9.4688ZM22.4836 9.50598C22.4836 8.87394 22.3613 8.33485 22.1166 7.8887C21.8719 7.43016 21.5416 7.08316 21.1256 6.8477C20.7096 6.59984 20.2631 6.47591 19.7859 6.47591C19.3088 6.47591 18.8683 6.59364 18.4646 6.82911C18.0609 7.06457 17.7305 7.41158 17.4736 7.87011C17.2289 8.31626 17.1066 8.84915 17.1066 9.4688C17.1066 10.0884 17.2289 10.6337 17.4736 11.1047C17.7305 11.5632 18.0609 11.9164 18.4646 12.1643C18.8806 12.4121 19.321 12.536 19.7859 12.536C20.2631 12.536 20.7096 12.4183 21.1256 12.1828C21.5416 11.935 21.8719 11.588 22.1166 11.1418C22.3613 10.6833 22.4836 10.138 22.4836 9.50598Z" fill="#56B280"/>
            <path d="M33.2145 4.208C34.4257 4.208 35.4045 4.59838 36.1508 5.37914C36.8971 6.1475 37.2702 7.22568 37.2702 8.61369V14.6552H34.701V8.96689C34.701 8.14895 34.4991 7.52311 34.0954 7.08936C33.6917 6.64321 33.1411 6.42014 32.4437 6.42014C31.7341 6.42014 31.1714 6.64321 30.7554 7.08936C30.3516 7.52311 30.1498 8.14895 30.1498 8.96689V14.6552H27.5805V4.35672H30.1498V5.63939C30.4923 5.19324 30.9267 4.84624 31.4527 4.59838C31.9911 4.33813 32.5783 4.208 33.2145 4.208Z" fill="#56B280"/>
            <path d="M39.0528 9.4688C39.0528 8.4278 39.2547 7.50452 39.6584 6.69898C40.0744 5.89344 40.6372 5.2738 41.3468 4.84004C42.0564 4.40629 42.8455 4.18942 43.7141 4.18942C44.3748 4.18942 45.0049 4.33813 45.6044 4.63556C46.2038 4.9206 46.681 5.30478 47.0358 5.7881V0.899095H49.6417V14.6552H47.0358V13.1309C46.7177 13.639 46.2711 14.048 45.6961 14.3578C45.1211 14.6676 44.4543 14.8225 43.6958 14.8225C42.8394 14.8225 42.0564 14.5995 41.3468 14.1533C40.6372 13.7072 40.0744 13.0813 39.6584 12.2758C39.2547 11.4579 39.0528 10.5222 39.0528 9.4688ZM47.0541 9.50598C47.0541 8.87394 46.9318 8.33485 46.6871 7.8887C46.4424 7.43016 46.1121 7.08316 45.6961 6.8477C45.2801 6.59984 44.8336 6.47591 44.3564 6.47591C43.8793 6.47591 43.4389 6.59364 43.0351 6.82911C42.6314 7.06457 42.301 7.41158 42.0441 7.87011C41.7994 8.31626 41.6771 8.84915 41.6771 9.4688C41.6771 10.0884 41.7994 10.6337 42.0441 11.1047C42.301 11.5632 42.6314 11.9164 43.0351 12.1643C43.4511 12.4121 43.8915 12.536 44.3564 12.536C44.8336 12.536 45.2801 12.4183 45.6961 12.1828C46.1121 11.935 46.4424 11.588 46.6871 11.1418C46.9318 10.6833 47.0541 10.138 47.0541 9.50598Z" fill="#56B280"/>
            <path d="M54.7203 0.899095V14.6552H52.151V0.899095H54.7203Z" fill="#56B280"/>
            <path d="M66.7098 9.28291C66.7098 9.65469 66.6854 9.9893 66.6364 10.2867H59.204C59.2651 11.0303 59.5221 11.6128 59.9748 12.0341C60.4274 12.4555 60.9841 12.6662 61.6448 12.6662C62.599 12.6662 63.2781 12.251 63.6818 11.4207H66.4529C66.1593 12.4121 65.5965 13.2301 64.7645 13.8745C63.9326 14.5065 62.911 14.8225 61.6998 14.8225C60.7211 14.8225 59.8402 14.6057 59.0572 14.1719C58.2864 13.7258 57.6808 13.0999 57.2403 12.2944C56.8121 11.4888 56.598 10.5594 56.598 9.50598C56.598 8.44019 56.8121 7.50452 57.2403 6.69898C57.6685 5.89344 58.268 5.2738 59.0388 4.84004C59.8096 4.40629 60.6966 4.18942 61.6998 4.18942C62.6663 4.18942 63.5289 4.4001 64.2874 4.82145C65.0582 5.24281 65.6515 5.84387 66.0675 6.62462C66.4957 7.39299 66.7098 8.27908 66.7098 9.28291ZM64.0488 8.53933C64.0366 7.87011 63.798 7.33722 63.3331 6.94064C62.8682 6.53168 62.2993 6.32719 61.6264 6.32719C60.9902 6.32719 60.4519 6.52548 60.0115 6.92205C59.5832 7.30624 59.3202 7.84533 59.2223 8.53933H64.0488Z" fill="#56B280"/>
            <path d="M67.9245 9.4688C67.9245 8.4278 68.1264 7.50452 68.5301 6.69898C68.9461 5.89344 69.5027 5.2738 70.2001 4.84004C70.9097 4.40629 71.6988 4.18942 72.5675 4.18942C73.326 4.18942 73.9867 4.34433 74.5494 4.65415C75.1245 4.96397 75.5833 5.35435 75.9258 5.82528V4.35672H78.5134V14.6552H75.9258V13.1495C75.5955 13.6328 75.1367 14.0356 74.5494 14.3578C73.9744 14.6676 73.3076 14.8225 72.5491 14.8225C71.6927 14.8225 70.9097 14.5995 70.2001 14.1533C69.5027 13.7072 68.9461 13.0813 68.5301 12.2758C68.1264 11.4579 67.9245 10.5222 67.9245 9.4688ZM75.9258 9.50598C75.9258 8.87394 75.8035 8.33485 75.5588 7.8887C75.3141 7.43016 74.9838 7.08316 74.5678 6.8477C74.1518 6.59984 73.7053 6.47591 73.2281 6.47591C72.751 6.47591 72.3105 6.59364 71.9068 6.82911C71.5031 7.06457 71.1727 7.41158 70.9158 7.87011C70.6711 8.31626 70.5488 8.84915 70.5488 9.4688C70.5488 10.0884 70.6711 10.6337 70.9158 11.1047C71.1727 11.5632 71.5031 11.9164 71.9068 12.1643C72.3228 12.4121 72.7632 12.536 73.2281 12.536C73.7053 12.536 74.1518 12.4183 74.5678 12.1828C74.9838 11.935 75.3141 11.588 75.5588 11.1418C75.8035 10.6833 75.9258 10.138 75.9258 9.50598Z" fill="#56B280"/>
            <path d="M85.6841 6.4945H83.9039V14.6552H81.298V6.4945H80.1418V4.35672H81.298V3.83622C81.298 2.57214 81.6528 1.64267 82.3624 1.04781C83.072 0.45295 84.1425 0.174109 85.574 0.211288V2.40483C84.95 2.39244 84.5157 2.49778 84.271 2.72085C84.0263 2.94393 83.9039 3.3467 83.9039 3.92916V4.35672H85.6841V6.4945Z" fill="#56B280"/>
            </svg>
        </div>
        <nav className=" flex items-center md:flex-1">
            <ul className=" flex flex-col md:flex-row md:space-x-10 md:ml-[25%]">
                <li className=""><Link href=''>Discovery</Link></li>
                <li className=""><Link href=''>About</Link></li>
                <li className=""><Link href=''>Contact us</Link></li>
            </ul>
            <div className=" flex items-center ml-auto space-x-2">
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M27.625 29.75C27.625 29.75 29.75 29.75 29.75 27.625C29.75 25.5 27.625 19.125 17 19.125C6.375 19.125 4.25 25.5 4.25 27.625C4.25 29.75 6.375 29.75 6.375 29.75H27.625ZM6.38563 27.744V27.7397V27.744ZM6.42175 27.625H27.5782C27.5882 27.6238 27.5981 27.6224 27.608 27.6208L27.625 27.6165C27.6229 27.0938 27.2978 25.5212 25.857 24.0805C24.4715 22.695 21.8641 21.25 17 21.25C12.1337 21.25 9.5285 22.695 8.143 24.0805C6.70225 25.5212 6.37925 27.0938 6.375 27.6165C6.39055 27.6195 6.40614 27.6223 6.42175 27.625ZM27.6165 27.744V27.7397V27.744ZM17 14.875C18.1272 14.875 19.2082 14.4272 20.0052 13.6302C20.8022 12.8332 21.25 11.7522 21.25 10.625C21.25 9.49783 20.8022 8.41683 20.0052 7.6198C19.2082 6.82277 18.1272 6.375 17 6.375C15.8728 6.375 14.7918 6.82277 13.9948 7.6198C13.1978 8.41683 12.75 9.49783 12.75 10.625C12.75 11.7522 13.1978 12.8332 13.9948 13.6302C14.7918 14.4272 15.8728 14.875 17 14.875ZM23.375 10.625C23.375 12.3158 22.7034 13.9373 21.5078 15.1328C20.3123 16.3284 18.6908 17 17 17C15.3092 17 13.6877 16.3284 12.4922 15.1328C11.2966 13.9373 10.625 12.3158 10.625 10.625C10.625 8.93425 11.2966 7.31274 12.4922 6.11719C13.6877 4.92165 15.3092 4.25 17 4.25C18.6908 4.25 20.3123 4.92165 21.5078 6.11719C22.7034 7.31274 23.375 8.93425 23.375 10.625Z" fill="#272727"/>
                </svg>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.4375C0 2.22201 0.0856024 2.01535 0.237976 1.86298C0.390349 1.7106 0.597012 1.625 0.8125 1.625H3.25C3.43124 1.62505 3.60726 1.68569 3.75006 1.79729C3.89287 1.90889 3.99427 2.06502 4.03813 2.24087L4.69625 4.875H23.5625C23.6827 4.87507 23.8013 4.9018 23.9099 4.95325C24.0185 5.0047 24.1143 5.07959 24.1905 5.17254C24.2666 5.26548 24.3212 5.37416 24.3503 5.49075C24.3794 5.60733 24.3823 5.72892 24.3587 5.84675L22.7337 13.9717C22.6982 14.1489 22.6046 14.3092 22.4677 14.4272C22.3309 14.5452 22.1586 14.6143 21.9781 14.6234L6.708 15.3904L7.17438 17.875H21.125C21.3405 17.875 21.5472 17.9606 21.6995 18.113C21.8519 18.2653 21.9375 18.472 21.9375 18.6875C21.9375 18.903 21.8519 19.1097 21.6995 19.262C21.5472 19.4144 21.3405 19.5 21.125 19.5H6.5C6.31058 19.4998 6.12717 19.4335 5.98148 19.3124C5.83579 19.1913 5.73698 19.0232 5.70213 18.837L3.26625 5.86138L2.61625 3.25H0.8125C0.597012 3.25 0.390349 3.1644 0.237976 3.01202C0.0856024 2.85965 0 2.65299 0 2.4375ZM5.04075 6.5L6.40575 13.7784L21.2648 13.0325L22.5713 6.5H5.04075ZM8.125 19.5C7.26305 19.5 6.4364 19.8424 5.8269 20.4519C5.21741 21.0614 4.875 21.888 4.875 22.75C4.875 23.612 5.21741 24.4386 5.8269 25.0481C6.4364 25.6576 7.26305 26 8.125 26C8.98695 26 9.8136 25.6576 10.4231 25.0481C11.0326 24.4386 11.375 23.612 11.375 22.75C11.375 21.888 11.0326 21.0614 10.4231 20.4519C9.8136 19.8424 8.98695 19.5 8.125 19.5ZM19.5 19.5C18.638 19.5 17.8114 19.8424 17.2019 20.4519C16.5924 21.0614 16.25 21.888 16.25 22.75C16.25 23.612 16.5924 24.4386 17.2019 25.0481C17.8114 25.6576 18.638 26 19.5 26C20.362 26 21.1886 25.6576 21.7981 25.0481C22.4076 24.4386 22.75 23.612 22.75 22.75C22.75 21.888 22.4076 21.0614 21.7981 20.4519C21.1886 19.8424 20.362 19.5 19.5 19.5ZM8.125 21.125C7.69402 21.125 7.2807 21.2962 6.97595 21.601C6.67121 21.9057 6.5 22.319 6.5 22.75C6.5 23.181 6.67121 23.5943 6.97595 23.899C7.2807 24.2038 7.69402 24.375 8.125 24.375C8.55598 24.375 8.9693 24.2038 9.27405 23.899C9.57879 23.5943 9.75 23.181 9.75 22.75C9.75 22.319 9.57879 21.9057 9.27405 21.601C8.9693 21.2962 8.55598 21.125 8.125 21.125ZM19.5 21.125C19.069 21.125 18.6557 21.2962 18.351 21.601C18.0462 21.9057 17.875 22.319 17.875 22.75C17.875 23.181 18.0462 23.5943 18.351 23.899C18.6557 24.2038 19.069 24.375 19.5 24.375C19.931 24.375 20.3443 24.2038 20.649 23.899C20.9538 23.5943 21.125 23.181 21.125 22.75C21.125 22.319 20.9538 21.9057 20.649 21.601C20.3443 21.2962 19.931 21.125 19.5 21.125Z" fill="#272727"/>
                </svg>
                </div>
        </nav>
   </header>
  )
}

export default Nav
