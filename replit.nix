{ pkgs }: {
  deps = [
    pkgs.opensshWithKerberos
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
  ];
}