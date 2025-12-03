export default function WavyDivider() {
    return (
        <div className="w-full bg-white">
            <svg
                viewBox="0 0 1440 200"
                preserveAspectRatio="none"
                className="w-full h-[100px] md:h-[120px]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0 100 Q 360 0, 720 100 Q 1080 200, 1440 100"
                    stroke="#D39885"
                    strokeWidth="13"
                    fill="none"
                />
            </svg>
        </div>
    )
}
