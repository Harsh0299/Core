import { Card } from '@shopify/polaris';
import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { DI, DIProps } from '../DependencyInjection';

interface PropsI extends DIProps {
    action: any;
}

function EmptyNotification({ action, ...Props }: PropsI): ReactElement {
    const push = useNavigate();
    return (
        <Card padding='0'>
            <div className="inte-flex intel-flex--align-center intel-flex--distribute-center inte-flex--spacing-Extraloose inte-flex--vertical     ">
                <div className="inte-flex__item">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="200"
                        height="200"
                        viewBox="0 0 150 150"
                        fill="none">
                        <circle cx="75" cy="75" r="75" fill="#FAFAFA" />
                        <g filter="url(#filter0_d)">
                            <path
                                d="M128.882 58.6752C127.821 54.8086 125.389 51.6279 121.772 49.8193C121.647 49.7569 121.46 49.6946 121.273 49.6322C122.209 45.8903 122.957 41.8989 121.273 38.2193C119.402 34.1032 115.535 32.7935 111.295 32.7935C101.94 32.7311 92.6473 32.8559 83.2925 32.9182C78.1785 32.9182 73.0645 32.9806 67.9505 32.9806C67.8882 32.9182 67.8258 32.7935 67.7634 32.7311C67.514 32.4817 67.5763 32.4817 67.4516 31.9828C67.3269 31.4838 67.2645 30.9225 67.0774 30.4236C66.7032 29.1139 66.0172 27.9914 64.8946 27.243C63.8344 26.5569 62.5871 26.3698 61.4022 26.1828C59.9677 25.9957 58.5333 25.8709 57.1613 25.7462C55.7269 25.6215 54.2301 25.4344 52.7957 25.3096C51.2989 25.1849 49.8021 25.4967 48.8043 26.6817C47.8688 27.6795 47.557 29.0516 47.2452 30.2989C46.9333 31.7333 46.6839 33.2301 46.4344 34.6645C45.9978 37.9698 45.8731 41.2752 46.1849 44.5806C42.6925 44.7053 39.2 45.329 36.0817 47.1376C31.0925 50.0064 29.0344 55.1828 28.9097 60.7333C28.8473 66.5333 30.157 72.3333 31.9032 77.8215C33.5871 83.372 35.957 88.7354 38.6387 93.8494C39.2624 95.0967 39.9484 96.344 40.6968 97.5914C33.5871 103.828 26.4151 110.064 19.3054 116.301L19.243 116.363C18.6194 116.426 18.0581 116.987 18.3699 117.735C19.3054 120.043 20.8022 121.852 22.9226 123.161C23.3591 123.411 23.9204 123.224 24.2323 122.912C31.0925 116.8 38.0151 110.813 45.0624 104.888C45.4989 105.574 45.9355 106.26 46.372 106.946C46.4344 107.071 46.4968 107.196 46.5591 107.32C46.6215 107.383 46.6215 107.383 46.6839 107.445C47.4946 108.692 48.243 110.002 49.1161 111.249C49.4903 111.811 49.9892 111.998 50.4882 111.935C50.6753 112.06 50.9871 112.06 51.2366 112.06C66.5785 111.499 81.9204 110.875 97.2624 110.314C101.628 110.127 105.994 110.002 110.359 109.815C111.045 109.815 111.482 109.441 111.731 108.942C112.542 109.004 113.29 108.443 113.727 107.695C118.217 99.9612 122.209 91.9161 125.576 83.6838C128.695 75.8881 131.252 67.1569 128.882 58.6752ZM28.9097 111.249C28.8473 111.187 28.7849 111.125 28.6602 111L30.4688 109.441C30.4688 109.441 30.4688 109.503 30.5312 109.503C30.0323 110.127 29.471 110.688 28.9097 111.249ZM53.4817 43.8322C53.5441 40.901 53.7935 38.0322 54.2301 35.1634C54.2925 34.5397 54.2925 33.4795 54.6043 32.9182C54.7914 32.6064 54.6043 32.7311 55.0409 32.6688C55.3527 32.6064 55.7269 32.6688 56.1011 32.6688C56.7871 32.6688 57.4731 32.6688 58.1591 32.6688C58.4086 32.6688 58.9075 32.544 59.0946 32.6688C59.3441 32.7935 59.2194 32.6688 59.3441 33.043C59.5312 34.0408 59.7183 34.9139 60.529 35.6623C61.2774 36.3483 62.2129 36.8473 63.1484 37.0967C65.1441 37.7204 67.2645 37.7828 69.3849 37.5333C82.0452 37.7828 94.7054 37.9698 107.366 38.7182C107.49 38.7806 107.615 38.843 107.802 38.843C109.86 38.9677 111.856 39.0301 113.914 39.2172C114.725 39.2795 115.535 39.4043 116.159 39.9655C116.159 39.9655 116.159 40.0279 116.221 40.0279C116.409 40.5892 116.471 41.2752 116.596 41.8365C116.72 42.5849 116.783 43.3333 116.783 44.144C116.845 45.4537 116.783 46.7634 116.658 48.0731C114.849 47.7612 113.041 47.5742 111.232 47.3871C106.991 47.0752 102.813 46.8258 98.572 46.5139C97.6365 45.7655 96.6387 45.0795 95.6409 44.4559C96.015 44.5182 96.4516 44.5806 96.8258 44.5806C101.441 45.1419 106.118 45.9526 110.796 45.329C111.794 45.2043 111.419 43.7075 110.484 43.8322C105.994 44.3935 101.441 43.5828 96.9505 43.0215L91.7742 42.3354C91.7118 42.3354 91.6495 42.2731 91.5871 42.2731C85.5376 39.7161 78.9892 39.4666 72.9398 41.2129C72.6903 41.1505 72.4409 41.1505 72.1914 41.0881C70.0086 40.7763 67.8882 40.4021 65.7054 40.0903C64.8946 39.9655 64.0215 39.9032 63.2107 40.1526C62.5871 40.2774 61.2151 41.1505 60.5914 40.6516C59.9054 39.9655 58.7204 40.9634 59.4688 41.6494C60.7785 42.8344 62.0882 41.9612 63.5226 41.6494C64.6452 41.4 65.7677 41.6494 66.828 41.8365C67.8258 41.9612 68.886 42.1483 69.8839 42.2731C68.3247 42.8967 66.8903 43.7075 65.4559 44.5806C61.4022 44.5806 57.4107 44.3935 53.4194 44.2688C53.4817 44.144 53.4817 44.0193 53.4817 43.8322ZM59.5935 52.8129C60.0925 52.1892 60.5914 51.5655 61.0903 50.9419C62.4624 50.9419 63.772 50.8795 65.1441 50.9419C73.9376 51.0043 82.7935 51.4408 91.5247 52.3139C91.5871 52.3139 91.7118 52.3139 91.7742 52.3139C95.2043 52.501 98.572 52.6881 102.002 52.8752C105.245 57.0537 106.867 62.1053 106.243 67.5311C104.996 78.0086 97.0753 87.2387 87.1591 90.6688C77.4925 94.0365 66.2043 91.043 59.7806 83.1225C59.7806 82.9354 59.7183 82.7483 59.5935 82.6236C53.4817 73.8924 53.2323 61.4193 59.5935 52.8129ZM58.6581 85.5548C58.4086 85.6172 58.1591 85.6795 57.972 85.8666C57.7849 85.8666 57.6602 85.8666 57.4731 85.8666L58.2839 85.1182C58.4086 85.243 58.5333 85.3677 58.6581 85.5548ZM70.6946 49.1957C69.4473 49.1957 68.1376 49.1333 66.8903 49.1333C66.1419 49.1333 65.3935 49.1333 64.6452 49.1333C64.6452 49.0709 64.5828 49.0086 64.5204 48.9462C66.5785 49.0086 68.6366 49.1333 70.6946 49.1957ZM68.886 44.9548C70.3828 44.2064 71.9419 43.5828 73.5634 43.0838C74.5613 43.2709 75.5591 43.3333 76.4946 43.3333C77.4925 43.3333 78.428 43.0215 79.3634 42.8344C80.486 42.5849 81.6086 42.772 82.7935 42.9591C85.1011 43.2709 87.4086 43.5204 89.7161 43.8322C91.4624 44.5182 93.1462 45.3914 94.7677 46.3892C90.9011 46.1397 86.972 45.8903 83.1054 45.7032C78.428 45.4537 73.6882 45.2043 68.886 44.9548ZM48.3054 49.258C48.5548 49.258 48.8667 49.1957 49.1161 49.1957C49.2409 49.1957 49.3032 49.1333 49.3656 49.1333C51.4237 49.0709 53.4817 49.1333 55.4774 49.258C55.1032 49.258 54.6667 49.258 54.2925 49.258C51.9849 49.3204 49.6774 49.3828 47.3699 49.5075C47.7441 49.5075 48.0559 49.3828 48.3054 49.258ZM35.271 73.0193C35.1462 72.3333 35.0215 71.7096 34.8968 71.0236C35.3333 72.458 35.7699 73.8301 36.2064 75.2021C36.2688 75.3892 36.3312 75.5763 36.3935 75.7634C36.0194 74.8903 35.6452 73.9548 35.271 73.0193ZM43.0043 88.9225C40.2602 82.1871 37.7656 75.2645 35.957 68.2172C35.0839 64.7871 34.6473 61.1698 35.8323 57.7397C37.0172 54.5591 39.5742 52.6881 42.8172 51.9397C46.2473 51.129 49.9892 51.1914 53.4817 51.0666C55.228 51.0043 56.9118 50.9419 58.6581 50.9419C52.172 59.3612 51.3613 71.2731 56.2882 80.6279C56.1634 80.8774 56.1634 81.1892 56.3505 81.4387C56.6624 81.9376 56.9742 82.4365 57.3484 82.9354C57.3484 82.9978 57.286 82.9978 57.286 83.0602C53.2323 86.615 49.1785 90.1699 45.1247 93.7247C44.3763 92.1656 43.6903 90.544 43.0043 88.9225ZM112.978 100.398C114.039 98.3397 115.099 96.344 116.159 94.286C115.161 96.344 114.101 98.4021 112.978 100.398ZM123.83 71.6473C122.708 77.5096 119.776 82.7483 117.032 87.9871C114.288 93.2881 111.544 98.5892 108.8 103.953C105.994 106.011 102.439 106.198 99.071 106.385C94.643 106.572 90.215 106.759 85.7871 106.946C76.9312 107.32 68.1376 107.757 59.2817 108.131C58.1591 108.194 56.7871 108.318 55.415 108.381C55.2903 108.256 55.1656 108.194 54.9785 108.131C54.043 107.819 53.1699 107.507 52.2344 107.196C52.172 107.196 52.1097 107.196 52.1097 107.196C52.0473 107.071 51.9849 107.009 51.9226 106.884C51.7978 106.51 51.486 106.198 51.1742 106.073C50.4258 104.639 49.6774 103.204 48.929 101.77C53.6064 97.9032 58.2839 94.0989 63.0237 90.3569C63.3978 90.1075 63.7097 89.5462 63.4602 89.1096C69.3849 93.2258 76.9935 94.8473 84.1656 93.4129C95.1419 91.1677 104.372 82.3741 107.303 71.5849C108.925 65.5978 108.363 59.1742 104.996 53.8731C104.809 53.5612 104.621 53.3118 104.372 53C106.555 53.1247 108.675 53.2494 110.858 53.3741C114.163 53.5612 117.656 53.9978 120.712 55.2451C120.774 55.3075 120.774 55.3075 120.837 55.3698C124.766 59.6107 124.89 66.2838 123.83 71.6473Z"
                                fill="url(#paint0_linear)"
                            />
                            <path
                                d="M91.6495 82.1871C90.0903 83.8086 87.9075 84.4946 85.7871 84.9311C83.2925 85.4924 80.7979 85.8043 78.2409 85.7419C75.7462 85.6795 73.2516 85.1806 71.0688 84.058C68.886 82.9355 67.0774 81.1892 65.4559 79.3806C64.7075 78.5699 63.585 79.8172 64.271 80.5656C66.0796 82.6236 68.1376 84.4946 70.5699 85.7419C72.9398 86.9268 75.6215 87.4258 78.2409 87.4881C80.985 87.5505 83.729 87.1763 86.3484 86.5527C88.7183 86.0537 91.0882 85.1806 92.772 83.372C93.5828 82.5613 92.3979 81.4387 91.6495 82.1871Z"
                                fill="url(#paint1_linear)"
                            />
                            <path
                                d="M98.572 78.1956C98.5097 77.8838 98.3849 77.6343 98.1978 77.3849C98.1355 77.2601 98.0107 77.1978 97.886 77.073C97.8236 77.0107 97.7613 77.0107 97.7613 76.9483C97.6366 76.8859 97.5118 76.8236 97.3871 76.7612C97.2624 76.6988 97.0753 76.6988 96.9505 76.6365C96.7634 76.5741 96.514 76.6365 96.3269 76.6365C96.1398 76.6365 95.9527 76.6988 95.7656 76.8236C95.5785 76.8859 95.3914 77.0107 95.2667 77.1354C95.0172 77.3225 94.8925 77.572 94.7677 77.8214C94.7054 78.0085 94.643 78.258 94.643 78.4451C94.643 78.8193 94.7054 79.0687 94.8301 79.3806C94.8925 79.5677 95.0172 79.8171 95.2043 79.9419C95.4538 80.1913 95.6409 80.316 95.9527 80.5031C96.015 80.5031 96.0774 80.5655 96.1398 80.5655C96.3269 80.6279 96.4516 80.6279 96.6387 80.6279C96.7634 80.6279 96.9505 80.6279 97.0753 80.5655C97.0753 80.5655 97.1376 80.5655 97.1376 80.5031H97.2C97.5118 80.4408 97.7613 80.316 98.0107 80.129C98.2602 79.9419 98.3849 79.6924 98.572 79.3806C98.6968 79.1935 98.6968 78.944 98.7591 78.7569C98.6344 78.6322 98.6344 78.3827 98.572 78.1956Z"
                                fill="url(#paint2_linear)"
                            />
                            <path
                                d="M89.9032 70.0881C88.2817 68.6537 86.7226 67.1569 85.1011 65.7225C86.4108 64.5999 87.6581 63.415 88.9677 62.2924C91.4624 60.0473 87.7204 56.4301 85.2258 58.6752C83.9161 59.8602 82.5441 61.0451 81.2344 62.2301C79.9247 61.0451 78.6151 59.8602 77.3054 58.6752C74.3742 55.9935 69.7591 60.1096 72.6903 62.7913C74 63.9763 75.3097 65.1612 76.6194 66.3462C74.8731 67.9053 73.0645 69.4645 71.3183 71.0236C68.8237 73.2688 72.5656 76.886 75.0602 74.6408C76.8688 73.0193 78.6774 71.4602 80.486 69.8387C82.1075 71.2731 83.6667 72.7698 85.2882 74.2042C88.2193 76.886 92.8344 72.7698 89.9032 70.0881Z"
                                fill="url(#paint3_linear)"
                            />
                            <path
                                d="M56.9118 119.981C55.6645 120.667 54.1677 121.54 52.671 121.166C51.4237 120.854 50.9247 119.419 49.4903 119.232C48.6796 119.17 47.9312 119.544 47.2452 119.918C46.4968 120.355 45.686 120.729 44.9376 121.166C44.314 121.477 43.5656 121.914 42.8172 121.976C42.443 121.976 41.8194 121.914 41.6946 121.477C41.2581 120.043 38.9505 120.48 39.3871 121.914C39.886 123.535 41.4452 124.471 43.129 124.284C45.0624 124.097 46.871 122.725 48.5548 121.852C48.8667 121.664 49.1161 121.477 49.428 121.664C49.6774 121.789 49.9269 122.163 50.1763 122.35C50.8 122.912 51.5484 123.286 52.4215 123.473C54.4172 123.847 56.2258 122.974 57.9097 122.039C59.2817 121.353 58.2215 119.232 56.9118 119.981Z"
                                fill="url(#paint4_linear)"
                            />
                            <path
                                d="M125.389 111.998C124.516 112.684 123.518 113.557 122.458 113.183C121.585 112.871 121.211 111.437 120.275 111.249C119.714 111.187 119.215 111.561 118.716 111.935C118.155 112.372 117.656 112.746 117.095 113.183C116.658 113.495 116.159 113.931 115.66 113.994C115.411 113.994 114.974 113.931 114.912 113.495C114.6 112.06 112.978 112.497 113.29 113.931C113.602 115.553 114.725 116.488 115.847 116.301C117.219 116.114 118.467 114.742 119.589 113.869C119.839 113.682 119.963 113.495 120.213 113.682C120.4 113.806 120.587 114.181 120.712 114.368C121.148 114.929 121.71 115.303 122.271 115.49C123.643 115.864 124.89 114.991 126.075 114.056C127.011 113.37 126.325 111.249 125.389 111.998Z"
                                fill="url(#paint5_linear)"
                            />
                            <path
                                d="M36.0194 32.7312C35.1462 33.4172 34.1484 34.2903 33.0882 33.9161C32.2151 33.6043 31.8409 32.1699 30.9054 31.9828C30.3441 31.9204 29.8452 32.2946 29.3462 32.6688C28.7849 33.1054 28.286 33.4796 27.7247 33.9161C27.2882 34.228 26.7892 34.6645 26.2903 34.7269C26.0409 34.7269 25.6043 34.6645 25.5419 34.228C25.2301 32.7936 23.6086 33.2301 23.9204 34.6645C24.2323 36.286 25.3548 37.2215 26.4774 37.0344C27.8495 36.8473 29.0968 35.4753 30.2194 34.6022C30.4688 34.4151 30.5935 34.228 30.843 34.4151C31.0301 34.5398 31.2172 34.914 31.3419 35.1011C31.7785 35.6624 32.3398 36.0366 32.9011 36.2237C34.2731 36.5979 35.5204 35.7247 36.7054 34.7893C37.7032 34.1656 36.9548 32.0452 36.0194 32.7312Z"
                                fill="url(#paint6_linear)"
                            />
                        </g>
                        <defs>
                            <filter
                                id="filter0_d"
                                x="1"
                                y="19"
                                width="146"
                                height="131.656"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB">
                                <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset dy="10" />
                                <feGaussianBlur stdDeviation="7.5" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.152941 0 0 0 0 0.137255 0 0 0 0 0.447059 0 0 0 0.25 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow"
                                    result="shape"
                                />
                            </filter>
                            <linearGradient
                                id="paint0_linear"
                                x1="18.2811"
                                y1="36.3899"
                                x2="143.235"
                                y2="65.3499"
                                gradientUnits="userSpaceOnUse">
                                <stop stopColor="#5DD69D" />
                                <stop offset="0.273958" stopColor="#6EB7FF" />
                                <stop offset="0.508333" stopColor="#FF6E6E" />
                                <stop offset="0.747917" stopColor="#FFD86E" />
                                <stop offset="1" stopColor="#53BF62" />
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear"
                                x1="64.0576"
                                y1="80.0662"
                                x2="86.9266"
                                y2="96.1785"
                                gradientUnits="userSpaceOnUse">
                                <stop stopColor="#5DD69D" />
                                <stop offset="0.273958" stopColor="#6EB7FF" />
                                <stop offset="0.508333" stopColor="#FF6E6E" />
                                <stop offset="0.747917" stopColor="#FFD86E" />
                                <stop offset="1" stopColor="#53BF62" />
                            </linearGradient>
                            <linearGradient
                                id="paint2_linear"
                                x1="94.643"
                                y1="77.0643"
                                x2="99.2998"
                                y2="78.0354"
                                gradientUnits="userSpaceOnUse">
                                <stop stopColor="#5DD69D" />
                                <stop offset="0.273958" stopColor="#6EB7FF" />
                                <stop offset="0.508333" stopColor="#FF6E6E" />
                                <stop offset="0.747917" stopColor="#FFD86E" />
                                <stop offset="1" stopColor="#53BF62" />
                            </linearGradient>
                            <linearGradient
                                id="paint3_linear"
                                x1="70.4956"
                                y1="59.7919"
                                x2="93.2457"
                                y2="65.164"
                                gradientUnits="userSpaceOnUse">
                                <stop stopColor="#5DD69D" />
                                <stop offset="0.273958" stopColor="#6EB7FF" />
                                <stop offset="0.508333" stopColor="#FF6E6E" />
                                <stop offset="0.747917" stopColor="#FFD86E" />
                                <stop offset="1" stopColor="#53BF62" />
                            </linearGradient>
                            <linearGradient
                                id="paint4_linear"
                                x1="39.3324"
                                y1="119.801"
                                x2="53.5752"
                                y2="130.77"
                                gradientUnits="userSpaceOnUse">
                                <stop stopColor="#5DD69D" />
                                <stop offset="0.273958" stopColor="#6EB7FF" />
                                <stop offset="0.508333" stopColor="#FF6E6E" />
                                <stop offset="0.747917" stopColor="#FFD86E" />
                                <stop offset="1" stopColor="#53BF62" />
                            </linearGradient>
                            <linearGradient
                                id="paint5_linear"
                                x1="113.251"
                                y1="111.819"
                                x2="125.464"
                                y2="118.313"
                                gradientUnits="userSpaceOnUse">
                                <stop stopColor="#5DD69D" />
                                <stop offset="0.273958" stopColor="#6EB7FF" />
                                <stop offset="0.508333" stopColor="#FF6E6E" />
                                <stop offset="0.747917" stopColor="#FFD86E" />
                                <stop offset="1" stopColor="#53BF62" />
                            </linearGradient>
                            <linearGradient
                                id="paint6_linear"
                                x1="23.8808"
                                y1="32.5519"
                                x2="36.1083"
                                y2="39.0673"
                                gradientUnits="userSpaceOnUse">
                                <stop stopColor="#5DD69D" />
                                <stop offset="0.273958" stopColor="#6EB7FF" />
                                <stop offset="0.508333" stopColor="#FF6E6E" />
                                <stop offset="0.747917" stopColor="#FFD86E" />
                                <stop offset="1" stopColor="#53BF62" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="inte-flex__item">
                    {action ? (
                        action
                    ) : (
                        <h3 className="inte__Heading--Medium   none">
                            No Data Available
                        </h3>
                    )}
                </div>
                <div className="inte-flex__item">
                    <button
                        className="inte-btn inte__plain-btn inte-plain-dark-btn"
                        onClick={() => {
                            push(-1);
                        }}>
                        <span className="inte__text">Go Back</span>
                    </button>
                </div>
            </div>
        </Card>
    );
}

export default DI(EmptyNotification);
