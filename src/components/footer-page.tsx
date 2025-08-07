export default function Footer() {
    return (
        <footer className="bg-[#0b2b4d] text-white py-12 px-6 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                <div>
                    <h2 className="text-xl font-bold mb-4">
                        <span className=" px-2 py-1">Our Mission</span>
                    </h2>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                        So seed seed green that winged cattle in. Gathering thing made fly you're no divided deep moved us Ian Gathering thing us land years living.
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        So seed seed green that winged cattle in. Gathering thing made fly you're no divided deep moved.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li><a href="#" className="hover:text-white transition">Home</a></li>
                        <li><a href="#" className="hover:text-white transition">Shop</a></li>
                        <li><a href="#" className="hover:text-white transition">Blog</a></li>
                        <li><a href="#" className="hover:text-white transition">Product</a></li>
                        <li><a href="#" className="hover:text-white transition">Brand</a></li>
                        <li><a href="#" className="hover:text-white transition">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-4">Gallery</h2>
                    <div className="grid grid-cols-3 gap-2">
                        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0c43482e-8fc1-45f6-8c9a-4e689c6738ba/FLEX+RUNNER+4+%28PS%29.png" className="w-full h-20 object-cover" />
                        <img src="https://cdn-img.oraimo.com/fit-in/600x600/AO/product/2024/03/14/oraimo-FreePods3C-12.jpg" className="w-full h-20 object-cover" />
                        <img src="https://manuals.plus/wp-content/uploads/2023/02/oraimo-OEB-E30D-Bluetooth-Wireless-Headset-product.png" className="w-full h-20 object-cover" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKaN8C_2SEra_up4xzgC5zY9IAJt9TjV6JAw&s" className="w-full h-20 object-cover" />
                        <img src="https://randomuser.me/api/portraits/women/1.jpg" className="w-full h-20 object-cover" />
                        <img src="https://randomuser.me/api/portraits/men/2.jpg" className="w-full h-20 object-cover" />
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                    <ul className="space-y-4 text-gray-300 text-sm">
                        <li className="flex items-start gap-2">
                            <span className="text-blue-400 text-lg">📍</span>
                            <div>
                                <strong>Head Office</strong><br />
                                123, Main Street, Your City
                            </div>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-400 text-lg">📞</span>
                            <div>
                                <strong>Phone Number</strong><br />
                                +123 456 7890<br />
                                +123 456 7890
                            </div>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-400 text-lg">📧</span>
                            <div>
                                <strong>Email</strong><br />
                                free@infoexample.com<br />
                                www.infoexample.com
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-blue-900 mt-12 pt-6 text-center text-gray-400 text-sm">
                Copyright ©2025 All rights reserved |
                This template is made by
                <a href="https://github.com/mr-body" target="_blank" className="text-blue-400 hover:underline"> Mr-body</a>
            </div>
        </footer>
    )
}