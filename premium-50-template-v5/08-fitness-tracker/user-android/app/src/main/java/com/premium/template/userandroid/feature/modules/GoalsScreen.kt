package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun GoalsScreen(onCreate:()->Unit){Card{Column{Text("Goals");Text("Domain-specific goals workflow");Button(onClick=onCreate){Text("Create")}}}}
