//
//  Appcelerator Titanium Mobile
//  WARNING: this is a generated file and should not be modified
//

#import <UIKit/UIKit.h>
#define _QUOTEME(x) #x
#define STRING(x) _QUOTEME(x)

NSString * const TI_APPLICATION_DEPLOYTYPE = @"development";
NSString * const TI_APPLICATION_ID = @"com.appcelerator.sample.rss";
NSString * const TI_APPLICATION_PUBLISHER = @"Appcelerator";
NSString * const TI_APPLICATION_URL = @"http://appcelerator.com";
NSString * const TI_APPLICATION_NAME = @"RSS Reader";
NSString * const TI_APPLICATION_VERSION = @"2.0.0";
NSString * const TI_APPLICATION_DESCRIPTION = @"undefined";
NSString * const TI_APPLICATION_COPYRIGHT = @"2015 by Appcelerator, Inc.";
NSString * const TI_APPLICATION_GUID = @"7bee4ee0-bac3-473a-9666-cc2e61cda704";
BOOL const TI_APPLICATION_ANALYTICS = true;
NSString * const TI_APPLICATION_BUILD_TYPE = @"";

#ifdef TARGET_IPHONE_SIMULATOR
NSString * const TI_APPLICATION_RESOURCE_DIR = @"";
#endif

int main(int argc, char *argv[]) {
    NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];

#ifdef __LOG__ID__
	NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
	NSString *documentsDirectory = [paths objectAtIndex:0];
	NSString *logPath = [documentsDirectory stringByAppendingPathComponent:[NSString stringWithFormat:@"%s.log",STRING(__LOG__ID__)]];
	freopen([logPath cStringUsingEncoding:NSUTF8StringEncoding],"w+",stderr);
	fprintf(stderr,"[INFO] Application started\n");
#endif

	int retVal = UIApplicationMain(argc, argv, nil, @"TiApp");
    [pool release];
    return retVal;
}
