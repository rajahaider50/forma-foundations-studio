package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun AnalyticsScreen(onCreate:()->Unit){Card{Column{Text("Analytics");Text("Domain-specific analytics workflow");Button(onClick=onCreate){Text("Create")}}}}
