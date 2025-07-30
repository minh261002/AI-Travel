module.exports = function (api) {
  api.cache(true);
  return {
    presets: [["babel-preset-expo", { jsxImportSource: "nativewind" }]],
    plugins: [
      "nativewind/babel",
      "react-native-reanimated/plugin", // Chỉ thêm nếu bạn dùng Reanimated (ví dụ carousel parallax)
    ],
  };
};
