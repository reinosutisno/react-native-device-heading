require 'json'

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name                = 'RNDeviceHeading'
  s.version             = package['version']
  s.summary             = package['description']
  s.license             = package['license']

  s.author              = package['author']
  s.homepage            = package['repository']['url']
  s.platform            = :ios, "9.0"
  s.ios.deployment_target = '9.0'
  s.tvos.deployment_target = '10.0'
 
  s.source              = { :git => "https://github.com/reinosutisno/react-native-device-heading.git", :tag => "v#{s.version}" }
  s.source_files        = "ios/**/*.{h,m,swift}"
  s.requires_arc        = true
 
  s.dependency 'React'

end