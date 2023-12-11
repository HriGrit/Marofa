export default function Modal({ open, onClose, children }) {
    return (
        // backdrop
        <div
            onClick={onClose}
            className={`
        fixed inset-0 flex justify-center items-center transition-colors
        ${open ? "visible bg-black/90" : "invisible"}
    `}
            style={{ zIndex: 9999 }} // Ensure this z-index is higher than any other element
        >
            {/* modal */}
            <div
                onClick={(e) => e.stopPropagation()}
                className={`
            bg-white rounded-xl shadow p-6 transition-all
            ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
                style={{ zIndex: 10000 }} // This z-index is higher than the backdrop to ensure modal is above the backdrop
            >

                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
                >
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                </button>
                {children}
            </div>
        </div>

    );
}

